import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (lenis && !queryParams.toString()) {
      lenis.scrollTo(0);
    }
  }, [location, lenis]);

  return null;
};

export default ScrollToTop;
