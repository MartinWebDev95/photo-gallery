import { useRef, useEffect, useState } from "react";


let distanceToSlide = 0;

const useCarousel = () => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  const [visibilityBtnLeft, setVisibilityBtnLeft] = useState(false);
  const [visibilityBtnRight, setVisibilityBtnRight] = useState(true);

  const handleMoveLeft = (e) => {
    const btnSize = e.target.offsetWidth;
    const scrollLeft = containerRef.current.scrollLeft;
    const containerWidth = containerRef.current.offsetWidth;

    if(!visibilityBtnRight) {
      distanceToSlide -= (containerWidth - btnSize);
    }else{
      distanceToSlide -= (((containerWidth - (btnSize * 2)) + scrollLeft) - scrollLeft);
    }
    
    containerRef.current.scroll(distanceToSlide, 0);
  }
  
  const handleMoveRight = (e) => {
    const btnSize = e.target.offsetWidth;
    const scrollLeft = containerRef.current.scrollLeft;
    const containerWidth = containerRef.current.offsetWidth;

    if(!visibilityBtnLeft) {
      distanceToSlide += (containerWidth - btnSize);
    }else{
      distanceToSlide += (scrollLeft + ((containerWidth - (btnSize * 2))));
    }

    containerRef.current.scroll(distanceToSlide, 0);
  }

  useEffect(() => {
    const container = containerRef.current;

    const checkBtnVisibility = () => {
      setVisibilityBtnLeft(container.scrollLeft > 0);
      setVisibilityBtnRight(container.scrollLeft < (container.scrollWidth - container.offsetWidth));
    }

    checkBtnVisibility();

    container.addEventListener('scroll', checkBtnVisibility);
    
    return () => container.removeEventListener('scroll', checkBtnVisibility);
  });

  return {
    carouselRef,
    containerRef,
    visibilityBtnLeft,
    visibilityBtnRight,
    handleMoveLeft,
    handleMoveRight
  }
}

export default useCarousel;