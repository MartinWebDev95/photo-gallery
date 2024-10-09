import ListOfPhotos from "@/components/ListOfPhotos";
import { getTopicImages } from "@/services/getDataFromAPI";

export default async function TopicPage({ params }) {

  const { slug } = params;

  const topicImages = await getTopicImages({ slug });

  return(
    <ListOfPhotos images={topicImages} />
  );
}