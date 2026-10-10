
import sys
import json
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

question = " ".join(sys.argv[1:])
embedding = model.encode(
    question,
    normalize_embeddings=True
)

print(json.dumps(embedding.tolist()))
