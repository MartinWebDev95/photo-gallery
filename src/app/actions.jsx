'use server'

import { getImagesCollection, getRandomImages, getSearchImages, getTopicImages } from "@/services/getDataFromAPI";

export async function fetchImages({ page = 1, query = '', slug = '', id = '', type = '' } = {}) {

  let images = [];

  switch(type) {
    case 'random':
      images = await getRandomImages({ page });
      break;
    case 'topics':
      images = await getTopicImages({ page, slug });
      break;
    case 'search':
      images = await getSearchImages({ page, query });
      break;
    case 'collections':
      images = await getImagesCollection({ page, id });
      break;
  }

  return images;
}