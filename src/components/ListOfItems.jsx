'use client';

import useCarousel from "@/hooks/useCarousel";
import CarouselBtn from "./CarouselBtn";
import Item from "./Item";

export function RightArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right stroke-white pointer-events-none z-30">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
}

export function LeftArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left stroke-white pointer-events-none z-30">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M15 6l-6 6l6 6" />
    </svg>
  );
}

const ListOfItems = ({ items, type }) => {

  const { containerRef, carouselRef, visibilityBtnLeft, visibilityBtnRight, handleMoveLeft, handleMoveRight } = useCarousel();  

  return (
    <div className="relative my-10">
      {visibilityBtnLeft && (
        <CarouselBtn direction='left' handleClick={handleMoveLeft}>
          <LeftArrowIcon/>
        </CarouselBtn>
      )}

      <div ref={containerRef} className="overflow-x-scroll scrollbar_none scroll-smooth">
        <ul ref={carouselRef} className="flex items-center justify-between gap-12 w-fit">
          {items.map((item) => (
            <Item key={item.id} item={item} type={type} />
          ))}
        </ul>
      </div>

      {visibilityBtnRight && (
        <CarouselBtn direction='right' handleClick={handleMoveRight}>
          <RightArrowIcon/>
        </CarouselBtn>
      )}
    </div>
  )
}

export default ListOfItems;