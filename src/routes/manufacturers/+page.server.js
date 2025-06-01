import db from '$lib/db.js';

export async function load() {
  const manufacturers = await db.getManufacturers();
  return { manufacturers };
}
