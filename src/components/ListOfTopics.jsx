import { getTopics } from "@/services/getDataFromAPI"

const ListOfTopics = async () => {

  const topics = await getTopics();

  return (
    <ul className='w-full flex items-center justify-between gap-12 py-20 px-4 lg:px-12 overflow-x-scroll scrollbar_none'>
      {topics.map((topic) => (
        <li key={topic.id} className="min-w-fit">
          <a href={`/topic/photos/${topic.slug}`} className="neomorphism p-4">
            {topic.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ListOfTopics