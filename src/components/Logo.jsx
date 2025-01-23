import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoTextl from '../assets/logo-textl.png';

const Logo = ({ size = 'header' }) => {
  const logoClasses =
    size === 'footer'
      ? 'object-contain w-auto h-auto max-w-[120px] max-h-[40px]'
      : 'object-contain w-full h-auto max-w-[60px] max-h-[30px]';

  return (
    <Link
      to="/"
      className="text-white text-2xl font-bold"
      title="Home"
      aria-label="Home"
    >
      <img
        src={size === 'footer' ? logoTextl : logo}
        alt="Logo"
        className={logoClasses}
        aria-hidden="true"
      />
    </Link>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
