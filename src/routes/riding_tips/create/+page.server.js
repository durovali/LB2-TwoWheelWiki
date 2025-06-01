import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const tip = {
      tip: data.get('tip'),
      manoeuver: data.get('manoeuver'),
      experience_level: data.get('experience_level'),
      maintenance_tips: data.get('maintenance_tips'),
      description: data.get('description'),
      safety_gear: data.get('safety_gear')
    };

    await db.createTip(tip);
    throw redirect(303, '/riding_tips');
  }
};
