import { getTopics } from "@/services/getDataFromAPI"
import Topic from "./Topic";

const ListOfTopics = async () => {

  const topics = await getTopics();

  return (
    <ul className='w-full flex items-center justify-between gap-12 py-20 px-4 lg:px-12 overflow-x-scroll scrollbar_none'>
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </ul>
  )
}

export default ListOfTopics