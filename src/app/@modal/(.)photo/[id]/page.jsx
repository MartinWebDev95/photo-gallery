import Modal from "@/components/Modal";
import { getImage } from "@/services/getDataFromAPI"

export default async function ModalPage({ params }){
  
  const { id } = params;

  const photo = await getImage({ id });
  
  return (
    <Modal>
      <img 
        src={photo.urls.regular} 
        alt={photo.description} 
        className='rounded-[20px] w-9/12 mt-8'
      />
    </Modal>
  )
}