const cors = require("cors");
const express = require("express");

require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require(
  "./routes/authroutes"
);
const achievementRoutes = require(
  "./routes/achroutes"
);
const uploadroutes = require(
  "./routes/uploadroutes"
);
const galleryRoutes = require(
  "./routes/galleryroutes"
);
const generateAnswer = require("./utils/generateAnswer");
const retrieveKnowledge = require("./utils/retrieveKnowledge");
const embedQuestion = require("./utils/embedQuestion");
const app = express();
app.use(cors());
app.use(express.json());

app.use(
  "/api/upload",
  uploadroutes
);

app.post("/api/chat", async (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== "string" || !question.trim()) {
    return res.status(400).json({
      error: "Please provide a question.",
    });
  }

  try {
    const questionEmbedding = await embedQuestion(question.trim());

    const result = retrieveKnowledge(
      question.trim(),
      questionEmbedding,
      3
    );
    const answer = await generateAnswer(
      question.trim(),
      result.fixedFacts,
      result.matches
    );

    return res.json({
      question: question.trim(),
      answer,
    });
  } catch (error) {
    console.error("Chat request failed:", {
      code: error.code || "CHAT_REQUEST_FAILED",
      status: error.status,
    });

    return res.status(error.code ? 503 : 500).json({
      error: "Sorry, I couldn't process your question right now.",
    });
  }
});

const requireDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({
      message: "Database connection failed",
    });
  }
};

app.use(requireDB);

app.use(
  "/api/ach",
  achievementRoutes
);
app.use(
  "/api/gallery",
  galleryRoutes
);
app.use(
  "/api/auth",
  authRoutes
);

const PORT = process.env.PORT || 8000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
