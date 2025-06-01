import db from '$lib/db.js';

export async function load() {
  const specs = await db.getSpecs();
  return { specs };
}
