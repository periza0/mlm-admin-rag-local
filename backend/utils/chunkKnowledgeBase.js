const fs = require("fs");
const path = require("path");

const knowledgeBasePath = path.join(
  __dirname,
  "../../knowledge-base/club-info.txt"
);

function chunkKnowledgeBase() {
  const text = fs.readFileSync(
    knowledgeBasePath,
    "utf8"
  );

  // Split the document at level-2 headings (##).
  const sections = text
    .split(/(?=^#{2,3} )/m)
    .map((section) => section.trim())
    .filter((section) => {
  const content = section
    .replace(/^#+\s.*$/gm, "")
    .trim();

  return content.length > 0;
});

  const chunks = sections.map((section, index) => {
    const lines = section.split("\n");
    const title = lines[0].replace(/^#+\s*/, "").trim();

    return {
      id: `club-${index + 1}`,
      title,
      text: section,
    };
  });

  return chunks;
}

module.exports = chunkKnowledgeBase;