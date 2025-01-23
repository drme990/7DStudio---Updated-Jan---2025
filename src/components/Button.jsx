import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from '../lib/utils';

const Button = ({
  className,
  children,
  variant = 'primary',
  type = 'button',
  to,
  onClick,
  smooth = true,
  duration = 500,
  offset = -80,
}) => {
  const variantStyles = {
    primary: 'bg-gradient-to-t-orange text-secondary-text',
    secondary:
      'bg-white dark:bg-primaryDarkBlack dark:outline dark:outline-[1px] dark:outline-gray-500/20 hover:outline-[3px] hover:outline-gray-500/40 duration-300 text-primaryDarkBlack dark:text-primaryLightWhite',
    outline:
      'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
    text: 'text-primary bg-transparent hover:underline duration-300',
    custom: '',
  };

  if (type === 'link') {
    return (
      <Link
        className={cn(
          'px-4 py-[13px] rounded-site text-[18.7] inline-block text-center',
          variantStyles[variant],
          className
        )}
        to={to}
      >
        {children}
      </Link>
    );
  }

  if (type === 'scroll') {
    return (
      <ScrollLink
        className={cn(
          'px-4 py-[13px] rounded-site text-[18.7] inline-block text-center cursor-pointer',
          variantStyles[variant],
          className
        )}
        to={to}
        smooth={smooth}
        duration={duration}
        offset={offset}
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <button
      className={cn(
        'px-4 py-[13px] rounded-site text-[18.7]',
        variantStyles[variant],
        className
      )}
      onClick={onClick}
      aria-label="get started"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'text',
    'custom',
  ]),
  type: PropTypes.oneOf(['link', 'button', 'scroll']),
  to: PropTypes.string,
  onClick: PropTypes.func,
  smooth: PropTypes.bool,
  duration: PropTypes.number,
  offset: PropTypes.number,
};

export default Button;
