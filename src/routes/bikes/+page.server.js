import db from '$lib/db.js';

export async function load() {
  const bikes = await db.getBikes();
  return { bikes };
}
