import { redirect } from '@sveltejs/kit';
import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const load: PageLoad = async (_) => {
  if (browser) {
    const baseurl = window.sessionStorage.getItem('baseurl');
    const token = window.sessionStorage.getItem('token');

    if (!baseurl || !token) {
      redirect(307, '/clearsense-manager/login');
    }
  }
};
