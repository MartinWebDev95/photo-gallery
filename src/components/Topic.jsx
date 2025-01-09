'use client'

import Link from "next/link";
import { useParams } from "next/navigation"

const Topic = ({ topic }) => {

  const { slug } = useParams();

  return (
    <li className="min-w-fit">
      <Link href={`/topic/photos/${topic.slug}`} className={`${slug === topic.slug ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'} rounded-2xl font-semibold shadow-xl p-4 transition-all ease-in-out duration-200 block backdrop-blur-xl text-white border border-white/10`}>
        {topic.title}
      </Link>
    </li>
  )
}

export default Topic