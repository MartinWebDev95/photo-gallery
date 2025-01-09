'use client'

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Modal = ({ children }) => {
  
  const pathname = usePathname();
  const router = useRouter();
  const modalRef = useRef();

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

  useEffect(() => {
    //Close modal when route changes
    if(!pathname.startsWith('/photo')){
      modalRef.current.classList.add('hidden')
      document.body.style.overflow = 'auto';
    }
  }, [pathname]);
  
  return (
    <dialog 
      ref={modalRef}
      data-name='dialog' 
      className='absolute top-[276px] md:top-0 left-0 bg-black/50 w-full h-full flex justify-center md:cursor-pointer md:overflow-y-scroll backdrop-blur-xl' 
      onClick={handleClick}
    >
      <div className="md:my-8 bg-black/30 border border-white/10 md:rounded-3xl w-full md:w-4/5 cursor-default h-fit">
        <div className="my-6 lg:my-12 px-4 md:px-6 lg:px-12">
          {children}
        </div>
      </div>
    </dialog>
  )
}

export default Modal;