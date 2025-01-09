import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-4 font-semibold text-2xl text-white'>
      <img 
        src="/assets/logo_black.png"
        alt="Photo Gallery Logo"
        className='w-10 h-10' 
        loading='lazy' />

      <p>Photo Gallery</p>
    </Link>
  )
}

export default Logo