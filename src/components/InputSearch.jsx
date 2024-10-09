'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {

  const [search, setSearch] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(search){
      router.push(`/search/photos/${search}`);
    }
  }

  return (
    <form className='flex items-center gap-4 lg:gap-6 w-full lg:w-[600px]' onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="search" 
        id="search" 
        placeholder='Search photos... '
        className='neomorphism_inset placeholder:text-black px-8 py-4 w-full'
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type='submit' className='neomorphism px-6 py-4'>
        Search
      </button>
    </form>
  )
}

export default InputSearch