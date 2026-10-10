
const selectFixedFacts = require("./selectFixedFacts");

const questions = [
  "What is the phone number for badminton coaching?",
  "How do I book a court?",
  "What equipment does the sports shop sell?",
  "Can I stay at MLM?",
  "How many badminton courts do you have?",
];

for (const question of questions) {
  console.log("\nQuestion:", question);
  console.log(
    JSON.stringify(selectFixedFacts(question), null, 2)
  );
  console.log("-----------------------------------");
}
