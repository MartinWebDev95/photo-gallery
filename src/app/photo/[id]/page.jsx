import ListOfPhotos from "@/components/ListOfPhotos";
import { getImage, getImagesCollection } from "@/services/getDataFromAPI"
import Link from "next/link";

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
    <>
      <Link href={`/users/${photo.user.username}/photos`} className='neomorphism_btn flex items-center gap-2 w-fit p-3'>
        <img 
          src={photo.user.profile_image.small} 
          alt={photo.user.name} 
          className="w-10 h-10 rounded-full" 
        />

        <div>
          <p className="font-semibold">{photo.user.name}</p>
          <p className="text-xs">{photo.user.username}</p>
        </div>
      </Link>
      
      <div className="w-full flex justify-center">
        <img 
          src={photo.urls.regular} 
          alt={photo.description} 
          className='rounded-[20px] neomorphism w-full md:w-10/12 my-12'
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="neomorphism px-6 py-2">
            <p className="text-sm font-semibold">Views</p>
            <p>{photo.views}</p>
          </div>
          <div className="neomorphism px-6 py-2">
            <p className="text-sm font-semibold">Downloads</p>
            <p>{photo.downloads}</p>
          </div>

          {photo.topics.length !== 0 && (
            <div className="neomorphism px-6 py-2">
              <p className="text-sm font-semibold">Topics</p>
              <p>{photo.topics.map((topic) => topic.title).join(',')}</p>
            </div>
          )}
        </div>

        {
          photo.location.name && (
            <p className="neomorphism px-6 py-4">
              {`${(photo.location.name).substring(0,1).toUpperCase()}${(photo.location.name).substring(1)}`}
            </p>
          )          
        }
      </div>

      <ul className="flex items-center justify-between gap-12 py-20 overflow-x-scroll scrollbar_none">
        {photo.tags.map((tag) => (
          <li key={tag.title} className="neomorphism_btn px-6 py-4 min-w-fit">
            {`${tag.title.substring(0,1).toUpperCase()}${tag.title.substring(1)}`}
          </li>
        ))}
      </ul>

      <p className="font-semibold mb-10 text-2xl">Related Images</p>

      <ListOfPhotos images={collectionImages} /> 
    </>
  )
}