import db from '$lib/db.js';

export async function load({ params }) {
  const movie = await db.getMovie(params.id);

  if (!movie) {
    return {
      status: 404,
      error: new Error('Film nicht gefunden'),
    };
  }

  return { movie };
}
