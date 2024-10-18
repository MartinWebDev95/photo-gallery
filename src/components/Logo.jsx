import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-2 neomorphism_btn p-2'>
      <img 
        src="/assets/logo.png"
        alt="Photo Gallery Logo"
        className='w-10 h-10' 
        loading='lazy' />

      <p>Photo Gallery</p>
    </Link>
  )
}

export default Logo