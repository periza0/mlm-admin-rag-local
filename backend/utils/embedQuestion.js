const { execFile } = require("child_process");
const path = require("path");
const { promisify } = require("util");

const execFileAsync = promisify(execFile);
const EMBEDDING_DIMENSIONS = 384;
const EMBEDDING_TIMEOUT_MS = 60_000;
const pythonExecutable = process.env.EMBEDDING_PYTHON
  || path.join(__dirname, "../../.venv-embeddings/bin/python");
const pythonScript = path.join(__dirname, "embedQuestion.py");

function createEmbeddingError(code) {
  const error = new Error(code);
  error.code = code;
  return error;
}

async function embedQuestion(question) {
  if (!question || typeof question !== "string" || !question.trim()) {
    throw createEmbeddingError("INVALID_QUESTION");
  }

  try {
    const { stdout } = await execFileAsync(pythonExecutable, [
      pythonScript,
      question.trim(),
    ], {
      timeout: EMBEDDING_TIMEOUT_MS,
      maxBuffer: 1024 * 1024,
    });
    const embedding = JSON.parse(stdout);

    if (
      !Array.isArray(embedding)
      || embedding.length !== EMBEDDING_DIMENSIONS
      || !embedding.every((value) => Number.isFinite(value))
    ) {
      throw createEmbeddingError("INVALID_EMBEDDING_RESPONSE");
    }

    return embedding;
  } catch (error) {
    if (error.code) {
      throw error;
    }

    throw createEmbeddingError("LOCAL_EMBEDDING_FAILED");
  }
}

module.exports = embedQuestion;
