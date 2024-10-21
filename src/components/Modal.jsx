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
    if(window.innerWidth >= 1024){
      document.body.style.overflow = 'hidden';
    }
  }, []);
  
  return (
    <dialog data-name='dialog' className='absolute top-[365px] lg:top-0 left-0 bg-black/70 w-full h-full flex justify-center lg:cursor-pointer lg:overflow-y-scroll' onClick={handleClick}>
      <div className="lg:my-8 bg-amber-200 lg:rounded-3xl w-full lg:w-4/5 cursor-default h-fit">
        <div className="my-6 lg:my-12 px-4 lg:px-12">
          {children}
        </div>
      </div>
    </dialog>
  )
}

export default Modal;