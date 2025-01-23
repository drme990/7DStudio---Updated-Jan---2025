import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="grid-bg min-h-screen bg-primaryLightWhite text-primaryDarkBlack dark:bg-primaryDarkBlack dark:text-primaryLightWhite flex items-center justify-center overflow-hidden">
      <div className="text-center space-y-10 px-6">
        <div className="relative">
          <h1
            className="text-9xl font-extrabold animate-pulse drop-shadow-lg"
            aria-label="Error 404"
          >
            404
          </h1>
        </div>
        <h2 className="text-4xl font-semibold tracking-wide">Page Not Found</h2>
        <p className="text-lg max-w-lg mx-auto">
          Oops! The page you are looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <Link
          to="/"
          className="relative inline-block px-10 py-4 mt-4 bg-black text-white text-lg rounded-lg border border-gray-500 shadow-lg transition-transform transform focus:outline-none focus:ring-4 focus:ring-yellow-300 overflow-hidden group"
          aria-label="Go back to homepage"
        >
          <span
            className="absolute -top-2 -right-4 rotate-45 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[24px] border-b-yellow-400 transition-transform transform duration-300 group-hover:scale-150"
            aria-hidden="true"
          ></span>
          <div className="relative overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Go Back Home
            </span>
            <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-yellow-500">
              Go Back Home
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
