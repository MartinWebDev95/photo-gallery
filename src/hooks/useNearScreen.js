import { useEffect, useRef, useState } from 'react';

function useNearScreen({ distance = '1000px', externalRef, once = true }) {
  const [nearScreen, setNearScreen] = useState(false);

  // Reference of the component to be rendered
  const elementRef = useRef();

  useEffect(() => {
    const elementToWatch = externalRef ? externalRef.current : elementRef.current;

    const onChange = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setNearScreen(true);

        // Disconnect the observer so that it does not run again
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        setNearScreen(false);
      }
    };

    // Change the state when the ref component is in the viewport
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    // Tell the intersection observer to observe the reference element
    if (elementToWatch) observer.observe(elementToWatch);

    // Return a function for the observer to disconnect when not needed
    return () => observer && observer.disconnect();
  }, []);

  return { nearScreen, elementRef };
}

export default useNearScreen;