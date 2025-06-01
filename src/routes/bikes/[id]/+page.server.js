import db from '$lib/db.js';

export async function load({ params }) {
  const bike = await db.getBike(params.id);

  if (!bike) {
    return {
      status: 404,
      error: new Error('Bike not found'),
    };
  }

  return { bike };
}
