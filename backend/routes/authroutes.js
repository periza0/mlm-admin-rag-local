const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    const admin = await Admin.findOne({
      name,
    });

    if (!admin) {
      return res.status(400).json({
        message: "Invalid",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;