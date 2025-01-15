'use client'

const CarouselBtn = ({ direction, handleClick, children }) => {
  return (
    <button 
      type="button"
      data-direction={direction} 
      aria-label={direction === 'left' ? 'Left Button' : 'Right Button'}
      className={`absolute top-0 data-[direction=left]:left-0 data-[direction=right]:right-0 data-[direction=right]:justify-end flex items-center h-full w-20 z-30 after:absolute after:top-0 after:block after:z-20 after:w-36 after:h-full after:pointer-events-none data-[direction=left]:after:left-0 data-[direction=right]:after:right-0 data-[direction=left]:after:bg-gradient-to-r data-[direction=right]:after:bg-gradient-to-l after:from-black/70 after:from-50%`} 
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default CarouselBtn;