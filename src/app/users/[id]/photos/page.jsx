import ListOfPhotos from '@/components/ListOfPhotos'
import UserDetails from '@/components/UserDetails'
import { getUserDetail, getUserPhotos } from '@/services/getDataFromAPI'
import React from 'react'

export async function generateMetadata({ params }) {
  const { id: username } = params
 
  return {
    title: `Product Gallery | ${decodeURI(username.substring(0,1).toUpperCase()+username.substring(1))}`,
  }
}

export default async function UserPhotosPage({ params }) {

  const { id } = params

  const user = await getUserDetail({ id });
  const userPhotos = await getUserPhotos({ id });

  return (
    <>
      <UserDetails user={user} />
      
      <ListOfPhotos initialImages={userPhotos} id={id} type='users' />
    </>
  )
}