'use client'

import Link from "next/link";
import { useParams } from "next/navigation"

const Item = ({ item, type }) => {

  const { slug } = useParams();

  return (
    <li className="min-w-fit">
      <Link href={`${type === 'tags' ? `/search/photos/${item.title}` : `/topic/photos/${item.slug}`}`} className={`${(type !== 'tags' && slug === item.slug) ? 'bg-white/30 border-white/20' : 'bg-white/10 hover:bg-white/20'} rounded-2xl font-semibold shadow-xl p-4 transition-all ease-in-out duration-200 block backdrop-blur-xl text-white border border-white/10`}>
        { type === 'tags' 
          ? `${item.title.substring(0,1).toUpperCase()}${item.title.substring(1)}` 
          : item.title }
      </Link>
    </li>
  )
}

export default Item;