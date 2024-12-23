import ListOfPhotos from "@/components/ListOfPhotos";
import { getSearchImages } from "@/services/getDataFromAPI";

export async function generateMetadata({ params }) {
  const query = params.query
 
  return {
    title: `Product Gallery | ${decodeURI(query.substring(0,1).toUpperCase()+query.substring(1))}`,
  }
}

export default async function SearchPage({ params }) {

  const { query } = params;

  const searchImages = await getSearchImages({ query });

  return (
    <ListOfPhotos initialImages={searchImages} query={query} type='search' />
  );
}