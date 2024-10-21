'use client'

import Link from "next/link";
import { useParams } from "next/navigation"

const Topic = ({ topic }) => {

  const { slug } = useParams();

  return (
    <li className="min-w-fit">
      <Link href={`/topic/photos/${topic.slug}`} className={`${slug === topic.slug ? 'bg-zinc-950' : 'bg-slate-900 hover:bg-slate-950'} rounded-2xl font-semibold shadow-xl p-4 transition-all ease-in-out duration-200 block`}>
        {topic.title}
      </Link>
    </li>
  )
}

export default Topic