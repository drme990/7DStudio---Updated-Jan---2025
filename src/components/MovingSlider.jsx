import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const MovingSlider = ({
  children,
  speed = 50,
  direction = 'normal',
  arrayNumber = 5,
  className,
  innerClassName,
}) => {
  const scrollDistance = '90%';
  const scrollDirection = useMemo(() => {
    const normal = { initial: `-${scrollDistance}`, end: '0%' };
    const reverse = { initial: '0%', end: `-${scrollDistance}` };
    return direction === 'normal' ? normal : reverse;
  }, [direction]);

  const repeatedChildren = useMemo(
    () =>
      Array.from({ length: arrayNumber }, (_, i) => (
        <React.Fragment key={i}>{children}</React.Fragment>
      )),
    [children, arrayNumber]
  );

  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <div
        className={cn('w-full flex items-center relative overflow-hidden')}
        dir="ltr"
      >
        <div className="absolute z-10 pointer-events-none left-0 bottom-0 h-full w-24 bg-gradient-to-r from-primaryLightWhite to-transparent dark:from-primaryDarkBlack dark:to-transparent" />

        <motion.div
          className={cn('flex items-center', innerClassName)}
          initial={{ x: scrollDirection.initial }}
          animate={{ x: scrollDirection.end }}
          transition={{
            duration: speed,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {repeatedChildren}
        </motion.div>

        <div className="absolute z-10 pointer-events-none right-0 bottom-0 h-full w-24 bg-gradient-to-l from-primaryLightWhite to-transparent dark:from-primaryDarkBlack dark:to-transparent" />
      </div>
    </div>
  );
};

MovingSlider.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  direction: PropTypes.oneOf(['normal', 'reverse']),
  arrayNumber: PropTypes.number,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
};

export default MovingSlider;
