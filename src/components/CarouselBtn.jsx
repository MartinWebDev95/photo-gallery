'use client'

export function RightArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right stroke-zinc-950">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
}

export function LeftArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left stroke-zinc-950">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M15 6l-6 6l6 6" />
    </svg>
  );
}

const CarouselBtn = ({ direction }) => {

  const handleClick = () => {
    
  }

  return (
    <button 
      type="button" 
      className={`absolute top-0 ${direction === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l flex justify-end items-center'} from-amber-200 from-15% h-full w-20`} 
      onClick={handleClick}
    >
      { direction === 'left' ? <LeftArrowIcon /> : <RightArrowIcon /> }
    </button>
  )
}

export default CarouselBtn