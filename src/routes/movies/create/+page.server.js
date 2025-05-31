import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const movie = {
      title: data.get('title'),
      year: parseInt(data.get('year')),
      length: data.get('length'),
      poster: data.get('poster') || undefined,
    };

    await db.createMovie(movie);
    throw redirect(303, '/movies');
  }
};
