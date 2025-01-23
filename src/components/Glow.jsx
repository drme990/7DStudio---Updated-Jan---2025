import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

const Glow = ({ isMoving = false, className, shrink = true }) => {
  const [scrollOffset, setScrollOffset] = useState(0);

  // Use useCallback to memoize the scroll handler and avoid unnecessary re-creations
  const handleScroll = useCallback(() => {
    const offset = Math.min(-window.scrollY, 400);
    setScrollOffset(offset);
  }, []);

  useEffect(() => {
    // Use passive listeners for better scrolling performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Compute the transform style once and cache it to avoid unnecessary recalculations
  const transformStyle = isMoving
    ? {
        transform: `translateY(${scrollOffset / 16}px)`,
        transition: 'transform 0.3s ease-out',
      }
    : { transform: 'translateY(0)', transition: 'transform 0.3s ease-out' };

  return (
    <div
      className={cn(
        'relative py-16 w-full blur-[30px] md:blur-[40px] z-0',
        className
      )}
      style={transformStyle}
      aria-hidden="true"
    >
      <div
        className={shrink ? 'gradientGlowParent' : 'gradientGlowParent-no'}
      />
      <div className={shrink ? 'gradientGlowChild' : 'gradientGlowChild-no'} />
    </div>
  );
};

Glow.propTypes = {
  isMoving: PropTypes.bool,
  className: PropTypes.string,
  shrink: PropTypes.bool,
};

export default Glow;
