'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
}

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
      <div className="relative w-full">
        <i className="absolute left-3 top-1/2 -translate-y-1/2">
          <SearchIcon/>
        </i>
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder='Search photos... '
          className='neomorphism_inset placeholder:text-black px-10 py-4 w-full'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <button type='submit' className='neomorphism_btn px-6 py-4'>
        Search
      </button>
    </form>
  )
}

export default InputSearch