import ListOfPhotos from "@/components/ListOfPhotos";
import { getSearchImages } from "@/services/getDataFromAPI";

export async function generateMetadata({ params }) {
  const query = params.query
 
  return {
    title: `Product Gallery | ${query}`,
  }
}

export default async function SearchPage({ params }) {

  const { query } = params;

  const searchImages = await getSearchImages({ query });

  return (
    <ListOfPhotos images={searchImages.results} />
  );
}