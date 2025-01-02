import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

export function invoke(method: 'GET' | 'POST', path: string, contentType: string, body: string) {
  if (!browser) {
    error(400, 'The request can only be made in the browser.');
  }

  const baseurl = window.sessionStorage.getItem('baseurl');
  const token = window.sessionStorage.getItem('token');

  if (!baseurl || !token) {
    error(401, 'The request can only be made by authenticated users.');
  }

  return fetch(
    `${baseurl}${path}`,
    {
      method,
      headers: {
        'Content-Type': contentType || 'application/json',
        'X-Api-Key': token
      },
      body: body
    }
  );
}
