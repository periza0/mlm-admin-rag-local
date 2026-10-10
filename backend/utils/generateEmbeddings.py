import json
import sys
from pathlib import Path
from sentence_transformers import SentenceTransformer

# Project paths
PROJECT_ROOT = Path(__file__).resolve().parents[2]
CHUNKS_SCRIPT = PROJECT_ROOT / "backend" / "utils" / "chunkKnowledgeBase.js"
OUTPUT_PATH = PROJECT_ROOT / "backend" / "data" / "embeddings.json"

# Exclude chatbot instructions from customer-facing retrieval.
EXCLUDED_TITLE = "9. CUSTOMER QUESTION HANDLING"


def main():
    print("Loading knowledge chunks...")

    # Use the existing JavaScript chunker.
    import subprocess

    result = subprocess.run(
        [
            "node",
            "-e",
            (
                "const chunk = require('./backend/utils/chunkKnowledgeBase'); "
                "console.log(JSON.stringify(chunk()));"
            ),
        ],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
        check=True,
    )

    chunks = json.loads(result.stdout)
    chunks = [
        chunk for chunk in chunks
        if chunk["title"] != EXCLUDED_TITLE
    ]

    if not chunks:
        raise ValueError("No knowledge chunks found.")

    print(f"Found {len(chunks)} customer knowledge chunks.")
    print("Loading local embedding model...")

    model = SentenceTransformer(
        "sentence-transformers/all-MiniLM-L6-v2"
    )

    texts = [chunk["text"] for chunk in chunks]

    print("Generating embeddings locally...")
    vectors = model.encode(
        texts,
        normalize_embeddings=True,
        show_progress_bar=True,
    )

    records = []

    for chunk, vector in zip(chunks, vectors):
        records.append({
            "id": chunk["id"],
            "title": chunk["title"],
            "text": chunk["text"],
            "embedding": vector.tolist(),
        })

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    with OUTPUT_PATH.open("w", encoding="utf-8") as file:
        json.dump(records, file, ensure_ascii=False)

    print("\nEmbedding generation successful!")
    print(f"Chunks embedded: {len(records)}")
    print(f"Vector dimensions: {len(records[0]['embedding'])}")
    print(f"Saved to: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()