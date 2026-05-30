const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

const store = new Map<string, number[]>();

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const hits = (store.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (hits.length >= MAX_REQUESTS) {
    const retryAfterSec = Math.ceil((WINDOW_MS - (now - hits[0])) / 1000);
    return { allowed: false, retryAfterSec };
  }

  hits.push(now);
  store.set(ip, hits);
  return { allowed: true, retryAfterSec: 0 };
}
