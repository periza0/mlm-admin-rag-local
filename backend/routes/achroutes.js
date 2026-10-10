const express = require("express");
const router = express.Router();

const Achievement = require("../models/ach");
const {
  createReadCache,
  setReadCacheHeaders,
  shouldBypassCache,
} = require("../utils/readCache");

const achievementsCache = createReadCache();

// GET all players
router.get("/", async (req, res) => {
  try {
    const bypass = shouldBypassCache(req);
    const result = await achievementsCache.get(
      () => Achievement.find().sort({ _id: 1 }).lean(),
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

// ADD player
router.post("/", async (req, res) => {
  try {
    const player = await Achievement.create(req.body);

    achievementsCache.clear();
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// DELETE player
router.delete("/:id", async (req, res) => {
  try {
    await Achievement.findByIdAndDelete(req.params.id);

    achievementsCache.clear();
    res.json({
      message: "Player Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
