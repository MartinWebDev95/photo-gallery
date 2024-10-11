import Link from "next/link"

const ListOfPhotos = ({ images }) => {
  return (
    <ul className='columns-[3_320px] gap-x-12'>
      {images.map((image) => (
        <li key={image.id}>
          <Link href={`/photo/${image.id}`} className='neomorphism'>
            <img 
              src={image.urls.small} 
              alt={image.description} 
              className='w-full rounded-[20px] mb-12 neomorphism' 
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ListOfPhotos