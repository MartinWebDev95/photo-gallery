'use client'

import { fetchImages } from "@/app/actions";
import useNearScreen from "@/hooks/useNearScreen";
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const ListOfPhotos = ({ initialImages, slug = '', query = '', id = '', type } = {}) => {

  const visor = useRef(null);
  const [images, setImages] = useState(initialImages);
  const [pages, setPage] = useState(1);

  const { nearScreen } = useNearScreen({ externalRef: visor, once: false });

  const fetchMoreImages = async () => {
    const nextPage = pages + 1;

    const images = await fetchImages({ page: nextPage, query, slug, id, type });
    
    if(images?.length > 0) {
      setPage(nextPage);
      setImages((prevState) => [...prevState, ...images]);
    }
  }

  useEffect(() => {
    if(nearScreen) {
      fetchMoreImages();
    }
  }, [nearScreen]);

  return (
    <ul className='columns-[3_320px] gap-x-12 pt-10'>
      {images.map((image) => (
        <li key={image.id}>
          <Link href={`/photo/${image.id}`}>
            <img 
              src={image.urls?.small} 
              alt={image.alt_description} 
              className='w-full rounded-3xl mb-12 block shadow-xl' 
              loading="lazy"
            />
          </Link>
        </li>
      ))}

      <li ref={visor}></li>
    </ul>
  )
}

export default ListOfPhotos