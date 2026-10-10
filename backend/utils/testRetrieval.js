
const retrieveKnowledge = require("./retrieveKnowledge");
const { execFileSync } = require("child_process");
const path = require("path");

const pythonScript = path.join(__dirname, "embedQuestion.py");
const pythonExecutable = path.join(
  __dirname,
  "../../.venv-embeddings/bin/python"
);

const question = "What is the phone number for badminton coaching?";

try {
  const output = execFileSync(
    pythonExecutable,
    [pythonScript, question],
    { encoding: "utf8" }
  );

  const questionEmbedding = JSON.parse(output);
  const retrieval = retrieveKnowledge(question, questionEmbedding, 3);
const results = retrieval.matches;
console.log(
  "\nAll fixed facts:\n",
  JSON.stringify(retrieval.fixedFacts, null, 2)
);

  console.log("\nQuestion:", question);
  console.log("\nTop matching chunks:\n");

  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.title}`);
    console.log("Similarity:", result.score.toFixed(4));
    console.log(result.text);
    console.log("--------------------------------");
  });
} catch (error) {
  console.error("Retrieval test failed:");
  console.error(error.message);
}
