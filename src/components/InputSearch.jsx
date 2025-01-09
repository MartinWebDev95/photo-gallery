'use client'

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
}

export function EraseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

const InputSearch = () => {

  const [search, setSearch] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if(pathname.split('/')[1] === 'search'){
      setSearch(decodeURI(pathname.split('/')[3]));
    }
  }, [pathname])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(search !== ''){
      router.push(`/search/photos/${search}`);
    }
  }

  return (
    <form className='flex items-center gap-4 lg:gap-6 w-full lg:w-[600px] font-semibold' onSubmit={handleSubmit}>
      <div className="relative w-full">
        <i className="absolute left-3 top-1/2 -translate-y-1/2">
          <SearchIcon/>
        </i>

        <input 
          type="text" 
          name="search" 
          id="search" 
          value={search}
          placeholder='Search photos... '
          className='bg-white/10 backdrop-blur-xl border border-white/10 placeholder:text-white px-10 py-4 w-full rounded-2xl focus:bg-white/20'
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent" onClick={() => setSearch('')}>
            <EraseIcon />
          </button>
        )}
      </div>

      <button type='submit' className='bg-white/10 backdrop-blur-xl border border-white/10 text-white rounded-2xl px-6 py-4 hover:bg-white/20 transition-all ease-in-out duration-200 shadow-xl'>
        Search
      </button>
    </form>
  )
}

export default InputSearch