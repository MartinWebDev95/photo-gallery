'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Modal = ({ children }) => {
  
  const router = useRouter();

  const handleClick = (e) => {
    if(e.target.getAttribute('data-name') !== null){
      router.back();
      document.body.style.overflow = 'auto';
    }
  }
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
  
  return (
    <dialog data-name='dialog' className='absolute top-0 left-0 bg-black/70 w-full h-full flex justify-center cursor-pointer overflow-y-scroll' onClick={handleClick}>
      <div className="my-8 bg-[#bdbdbd] rounded-3xl w-4/5 cursor-default h-fit">
        <div className="my-12 px-12">
          {children}
        </div>
      </div>
    </dialog>
  )
}

export default Modal;