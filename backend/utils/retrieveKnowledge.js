
const fs = require("fs");
const path = require("path");
const clubInfo = require("../data/clubInfo");
const selectFixedFacts = require("./selectFixedFacts");

const embeddingsPath = path.join(
  __dirname,
  "../data/embeddings.json"
);

const records = JSON.parse(
  fs.readFileSync(embeddingsPath, "utf8")
);

function cosineSimilarity(a, b) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

function retrieveKnowledge(question, questionEmbedding, topK = 3) {
  const results = records.map((record) => ({
    id: record.id,
    title: record.title,
    text: record.text,
    score: cosineSimilarity(questionEmbedding, record.embedding),
  }));

  return {
    fixedFacts: selectFixedFacts(question),
    matches: results
      .sort((a, b) => b.score - a.score)
      .slice(0, topK),
  };
}

module.exports = retrieveKnowledge;
