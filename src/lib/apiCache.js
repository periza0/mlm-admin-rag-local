const DEFAULT_TIMEOUT_MS = 8000;

function readCachedJson(storageKey) {
  try {
    const value = localStorage.getItem(storageKey);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function writeCachedJson(storageKey, data) {
  try {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        data,
        savedAt: Date.now(),
      })
    );
  } catch {
    // Local storage can be disabled or full. The live request still works.
  }
}

export async function fetchJsonWithFallback(
  url,
  storageKey,
  { timeoutMs = DEFAULT_TIMEOUT_MS, requestOptions = {} } = {}
) {
  const controller = new AbortController();
  const timeout = window.setTimeout(
    () => controller.abort(),
    timeoutMs
  );

  try {
    const response = await fetch(url, {
      ...requestOptions,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`);
    }

    const data = await response.json();
    writeCachedJson(storageKey, data);

    return {
      data,
      fromCache: false,
    };
  } catch (error) {
    const cached = readCachedJson(storageKey);

    if (cached) {
      return {
        data: cached.data,
        fromCache: true,
        error,
      };
    }

    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}

export function freshUrl(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}fresh=${Date.now()}`;
}
