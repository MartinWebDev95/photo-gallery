import { getImage } from "@/services/getDataFromAPI"

export default async function ImagePage({ params }){
  
  const { id } = params;

  const photo = await getImage({ id });
  
  return (
    <div className=''>
      <img 
        src={photo.urls.regular} 
        alt={photo.description} 
        className='rounded-[20px] neomorphism w-10/12'
      />
    </div>
  )
}