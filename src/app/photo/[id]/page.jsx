import PhotoDetail from "@/components/PhotoDetail";
import { getImage, getImagesCollection } from "@/services/getDataFromAPI"

export async function generateMetadata({ params }) {
  const { id } = params;

  const photo = await getImage({ id });

  return {
    title: `Photo Gallery | ${photo.alt_description}`
  }
}

export default async function ImagePage({ params }) {
  
  const { id } = params;

  const photo = await getImage({ id });

  const collectionImages = await getImagesCollection({ id: photo.related_collections.results[1].id });
  
  return (
    <PhotoDetail photo={photo} relatedPhotos={collectionImages} />
  )
}