import Link from 'next/link'
import React from 'react'

export function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-heart">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
    </svg>
  )
}

export function ImageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-photo">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
}

export function FollowersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
  )
}

export function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 15l6 -6" />
      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
    </svg>
  )
}

export function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  )
}

const UserDetails = ({ user }) => {
  return (
    <div className='grid place-content-center w-full py-10'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <img 
          src={user.profile_image.large} 
          alt={user.name} 
          className='rounded-full w-30 md:w-40' />

        <div className='w-fit'>
          <h1 className='font-bold text-center md:text-left text-3xl md:text-4xl text-black'>{user.name}</h1>

          <p className='text-black mt-4 '>{user.bio}</p>
          
          {user.twitter_username && (
            <p className='text-black mt-4 flex items-center gap-2 w-fit' title='X Username'>
              <TwitterIcon/>

              {user.twitter_username}
            </p>
          )}

          {user.instagram_username && (
            <p className='text-black mt-4 flex items-center gap-2 w-fit' title='Instagram Username'>
              <InstagramIcon/>

              {user.instagram_username}
            </p>
          )}

          {user.portfolio_url && (
            <p className='text-black flex items-center gap-2 mt-4 text-wrap' title={`Portfolio's user`}>
              <LinkIcon/>
              
              <Link href={user.portfolio_url} className='text-wrap'>
                {
                  user.portfolio_url.length > 25 
                    ? `${user.portfolio_url.substring(0,25)}...` 
                    : user.portfolio_url
                }
              </Link>
            </p>
          )}

          <div className='flex items-center gap-4 mt-4 w-fit'>
            <p className='text-black flex items-center gap-1' title='Photos'>
              <ImageIcon/>
              
              {user.total_photos}
            </p>

            <p className='text-black flex items-center gap-1' title='Likes'>
              <HeartIcon/>
              
              {user.total_likes}
            </p>

            <p className='text-black flex items-center gap-1' title='Followers'>
              <FollowersIcon/>
              
              {user.followers_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails