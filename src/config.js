// src/config.js

export const API_URL = import.meta.env.DEV
  ? "http://localhost:8000"
  : "https://mlmbackend-mauve.vercel.app";
