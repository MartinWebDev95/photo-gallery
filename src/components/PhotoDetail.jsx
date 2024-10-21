import Link from "next/link";
import ListOfPhotos from "./ListOfPhotos";

export function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  );
}

export function ViewsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
      <path d="M7 11l5 5l5 -5" />
      <path d="M12 4l0 12" />
    </svg>
  );
}

export function TopicsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-category-2">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M14 4h6v6h-6z" />
      <path d="M4 14h6v6h-6z" />
      <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  );
}

const Photo = ({ photo, relatedPhotos }) => {
  return (
    <>
      <Link href={`/users/${photo.user.username}/photos`} className='flex items-center gap-2 w-fit text-slate-900 hover:bg-slate-900 px-4 py-2 rounded-2xl hover:text-white transition-all ease-in-out duration-200 hover:shadow-xl'>
        <img 
          src={photo.user.profile_image.small} 
          alt={photo.user.name} 
          className="w-10 h-10 rounded-full"
          loading="lazy" 
        />

        <div>
          <p className="font-semibold">{photo.user.name}</p>
          <p className="text-xs">{photo.user.username}</p>
        </div>
      </Link>
      
      <div className="w-full flex justify-center">
        <img 
          src={photo.urls.regular} 
          alt={photo.description} 
          className='rounded-[20px] w-full md:w-10/12 my-12'
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 text-white">
          <div className="px-4 py-2 flex items-center gap-3 bg-slate-900 rounded-2xl shadow-xl">
            <ViewsIcon />

            <p>
              <span className="block text-sm font-semibold">
                Views
              </span>

              <span className="block">
                {photo.views}
              </span>
            </p>
          </div>

          <div className="px-4 py-2 flex items-center gap-3 bg-slate-900 rounded-2xl shadow-xl">
            <DownloadIcon />

            <p>
              <span className="block text-sm font-semibold">
                Downloads
              </span>

              <span className="block">
                {photo.downloads}
              </span>
            </p>
          </div>

          {photo.topics.length !== 0 && (
            <div className="px-4 py-2 flex items-center gap-3 bg-slate-900 rounded-2xl shadow-xl">
              <TopicsIcon />

              <p>
                <span className="block text-sm font-semibold">
                  Topics
                </span>

                <span className="block">
                  {photo.topics.map((topic) => topic.title)}
                </span>
              </p>
            </div>
          )}
        </div>

        {
          photo.location.name && (
            <p className="px-4 py-4 flex items-center gap-2 bg-slate-900 rounded-2xl shadow-xl text-white">
              <LocationIcon />

              {`${(photo.location.name).substring(0,1).toUpperCase()}${(photo.location.name).substring(1)}`}
            </p>
          )          
        }
      </div>

      <ul className="flex items-center justify-between gap-12 py-12 overflow-x-scroll scrollbar_none">
        {photo.tags.map((tag) => (
          <li key={tag.title} className="px-6 py-4 min-w-fit bg-slate-900 hover:bg-slate-950 rounded-2xl text-white font-semibold shadow-xl cursor-pointer transition-all ease-in-out duration-200">
            {`${tag.title.substring(0,1).toUpperCase()}${tag.title.substring(1)}`}
          </li>
        ))}
      </ul>

      <p className="font-semibold text-2xl text-slate-900 mt-6">Related Images</p>

      <ListOfPhotos 
        initialImages={relatedPhotos} 
        id={photo.related_collections.results[1].id} 
        type='collections' 
      /> 
    </>
  )
}

export default Photo