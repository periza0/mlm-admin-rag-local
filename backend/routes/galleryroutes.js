const express = require("express");
const router = express.Router();

const Gallery = require("../models/gallery");
const {
  createReadCache,
  setReadCacheHeaders,
  shouldBypassCache,
} = require("../utils/readCache");

const galleryCache = createReadCache();

// GET
router.get("/", async (req, res) => {
  try {
    const bypass = shouldBypassCache(req);
    const result = await galleryCache.get(
      () => Gallery.find().sort({ _id: 1 }).lean(),
      { bypass }
    );

    setReadCacheHeaders(res, {
      bypass,
      source: result.source,
    });

    res.json(result.data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const image = await Gallery.create(req.body);

    galleryCache.clear();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(
      req.params.id
    );

    galleryCache.clear();
    res.json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

});

module.exports = router;
