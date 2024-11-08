'use client'

import Link from "next/link"
import CarouselBtn from "./CarouselBtn"
import { useRef } from "react"

const ListOfTags = ({ tags }) => {

  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  return (
    <div className="relative my-10">
      <CarouselBtn direction='left' carouselRef={carouselRef} containerRef={containerRef} />
       
      <div ref={containerRef} className="overflow-x-scroll scrollbar_none scroll-smooth">
        <ul ref={carouselRef} className="flex items-center justify-between gap-12 w-fit">
          {tags.map((tag) => (
            <li key={tag.title} className="px-6 py-4 min-w-fit bg-slate-900 hover:bg-slate-950 rounded-2xl text-white font-semibold shadow-xl cursor-pointer transition-all ease-in-out duration-200">
              <Link href={`/search/photos/${tag.title}`}>
                {`${tag.title.substring(0,1).toUpperCase()}${tag.title.substring(1)}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <CarouselBtn direction='right' carouselRef={carouselRef} containerRef={containerRef} />
    </div>
  )
}

export default ListOfTags