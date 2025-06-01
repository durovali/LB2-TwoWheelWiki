import db from '$lib/db.js';

export async function load() {
  const ridingTips = await db.getTips();
  return { ridingTips };
}
