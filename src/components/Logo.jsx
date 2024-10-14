import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-2 neomorphism_btn p-2'>
      <Image 
        src="/assets/logo.png"
        width={45}
        height={45}
        alt="Photo Gallery Logo" />

      <p>Photo Gallery</p>
    </Link>
  )
}

export default Logo