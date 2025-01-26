import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { IoIosArrowUp } from 'react-icons/io';

const GoBackTop = () => {
  const lenis = useLenis();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`fixed bottom-16 right-10 h-10 w-10 z-50 flex items-center justify-center bg-secondaryLightWhite dark:bg-primaryDarkBlack border border-[#676767] dark:border-secondary-text rounded-site ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      tabIndex={isVisible ? 0 : -1}
    >
      {isHomePage ? (
        <button
          onClick={() => lenis.scrollTo(0)}
          aria-label="Scroll to top"
          className="focus:outline-none w-full h-full flex items-center justify-center"
          title="Scroll to top"
        >
          <IoIosArrowUp size={26} className="fill-[url(#icon-gradient)]" />
        </button>
      ) : (
        <Link
          to="/"
          aria-label="Go to homepage"
          prefetch="intent"
          className="focus:outline-none w-full h-full flex items-center justify-center"
          title="Go to homepage"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Define the gradient */}
            <defs>
              <linearGradient
                id="icon-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff7a18" />
                <stop offset="100%" stopColor="#af002d" />
              </linearGradient>
            </defs>
            <path
              d="M3 12l9-8 9 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z" // Example: Replace with GrHomeRounded path
              stroke="url(#icon-gradient)"
              fill="none"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default GoBackTop;
