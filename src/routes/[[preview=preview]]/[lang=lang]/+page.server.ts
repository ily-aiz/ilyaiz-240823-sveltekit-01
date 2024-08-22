import { asText } from '@prismicio/client';
import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies, params }) {
  const client = createClient({ fetch, cookies });

  const page = await client.getByUID('page', 'home', {
    lang: params.lang || 'en-us'
  });

  return {
    page,
    title: asText(page.data.title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url
  };
}

export function entries() {
  // Return an array of objects with the required 'lang' property
  return [
    { lang: 'en-us' },
    { lang: 'he' }
    // Add other languages as needed
  ];
}
