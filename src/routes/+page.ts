import { redirect } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  redirect(307, 'https://mpwav.com/');
};