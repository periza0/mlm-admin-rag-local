function createReadCache(ttlMs = 60000) {
  let entry = null;

  return {
    async get(loader, { bypass = false } = {}) {
      const now = Date.now();

      if (!bypass && entry && entry.expiresAt > now) {
        return {
          data: entry.data,
          source: "memory",
        };
      }

      try {
        const data = await loader();
        entry = {
          data,
          expiresAt: now + ttlMs,
        };

        return {
          data,
          source: "database",
        };
      } catch (error) {
        if (entry) {
          return {
            data: entry.data,
            source: "stale",
            error,
          };
        }

        throw error;
      }
    },

    clear() {
      entry = null;
    },
  };
}

function shouldBypassCache(req) {
  const cacheControl = req.get("cache-control") || "";
  const pragma = req.get("pragma") || "";

  return (
    req.query.fresh !== undefined ||
    cacheControl.includes("no-cache") ||
    pragma.includes("no-cache")
  );
}

function setReadCacheHeaders(res, { bypass = false, source } = {}) {
  if (bypass) {
    res.set("Cache-Control", "no-store");
  } else {
    res.set(
      "Cache-Control",
      "public, max-age=0, s-maxage=60, stale-while-revalidate=300"
    );
  }

  if (source) {
    res.set("X-Data-Source", source);
  }
}

module.exports = {
  createReadCache,
  setReadCacheHeaders,
  shouldBypassCache,
};
