'use client'

import Link from "next/link";
import { useParams } from "next/navigation"

const Topic = ({ topic }) => {

  const { slug } = useParams();

  return (
    <li className="min-w-fit">
      <Link href={`/topic/photos/${topic.slug}`} className={`${slug === topic.slug ? 'neomorphism_inset' : 'neomorphism'}  p-4`}>
        {topic.title}
      </Link>
    </li>
  )
}

export default Topic