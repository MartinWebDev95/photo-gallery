'use client'

import { useRouter } from "next/navigation";

const Modal = ({ children }) => {
  
  const router = useRouter();
  
  return (
    <dialog className='absolute top-0 left-0 bg-black/70 w-full flex justify-center' onClick={() => router.back()}>
      <div className="mt-8 bg-[#bdbdbd] rounded-3xl w-4/5 flex justify-center overflow-y-auto">
        {children}
      </div>
    </dialog>
  )
}

export default Modal;