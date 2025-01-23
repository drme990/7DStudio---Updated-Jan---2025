import { useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';

const LoaderFullPage = () => {
  // Use direct state initialization instead of useMemo
  const isDarkMode =
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') === 'dark'
      : true;

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300 rotate-180 ${
        isDarkMode ? 'bg-primaryDarkBlack' : 'bg-primaryLightWhite'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Page is loading, please wait."
    >
      <Triangle
        visible
        height={80}
        width={80}
        color="#FEDA00"
        ariaLabel="Loading spinner in triangle shape"
      />
    </div>
  );
};

export default LoaderFullPage;
