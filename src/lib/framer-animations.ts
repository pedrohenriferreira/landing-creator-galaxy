
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Animation hook for elements that should animate when they come into view
export function useAnimateInView(threshold = 0.1, triggerOnce = true) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });
  
  return { ref, inView };
}

// Hook for lazy loading images with blur effect
export function useLazyLoadImage(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  
  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);
  
  return { isLoaded, currentSrc };
}
