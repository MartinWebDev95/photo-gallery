import ListOfPhotos from "@/components/ListOfPhotos";
import { getRandomImages } from "@/services/getDataFromAPI";

export const metadata = {
  title: "Photo Gallery | Home",
};

export default async function HomePage() {

  const randomImages = await getRandomImages();

  return (
    <ListOfPhotos initialImages={randomImages} type='random' />    
  );
}
