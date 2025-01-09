import ListOfPhotos from "@/components/ListOfPhotos";
import { getTopicImages, getTopics } from "@/services/getDataFromAPI";

export async function generateMetadata({ params }) {
  const slug = params.slug

  const topics = await getTopics();

  const topic = topics.filter((item) => item.slug === slug); 
 
  return {
    title: `Product Gallery | ${topic[0]?.title}`,
    description: `${topic[0]?.description}`
  }
}

export default async function TopicPage({ params }) {

  const { slug } = params;

  const topicImages = await getTopicImages({ slug });

  return(
    <ListOfPhotos initialImages={topicImages} slug={slug} type='topics' />
  );
}