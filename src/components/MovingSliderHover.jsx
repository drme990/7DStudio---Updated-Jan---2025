import PropTypes from 'prop-types';
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useAnimation } from 'motion/react';
import { cn } from '../lib/utils';

const MovingSliderHover = ({
  children,
  speed = 50,
  arrayNumber = 5,
  enableHover = false,
  className,
}) => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const scrollAxis = 'x';

  const scrollValues = useMemo(() => ['0%', '-100%'], []);

  const lastTimestampRef = useRef(performance.now());

  const startAnimation = useCallback(
    (duration) => {
      const elapsedTime = (performance.now() - lastTimestampRef.current) / 1000;
      const progress = (elapsedTime % duration) / duration;

      controls.start({
        [scrollAxis]: scrollValues,
        transition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          from: progress,
        },
      });
      lastTimestampRef.current = performance.now();
    },
    [controls, scrollAxis, scrollValues]
  );

  const initializeAnimation = useCallback(() => {
    lastTimestampRef.current = performance.now();
    requestAnimationFrame(() => startAnimation(speed));
  }, [startAnimation, speed]);

  const handleVisibilityChange = useCallback(() => {
    if (document.visibilityState === 'visible') {
      initializeAnimation();
    }
  }, [initializeAnimation]);

  useEffect(() => {
    initializeAnimation();
    const timeout = setTimeout(() => initializeAnimation(), 500);

    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', initializeAnimation);

    return () => {
      clearTimeout(timeout);
      controls.stop();
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', initializeAnimation);
    };
  }, [initializeAnimation, controls, handleVisibilityChange]);

  const handleMouseEnter = useCallback(() => {
    if (enableHover) {
      controls.stop();
    }
  }, [enableHover, controls]);

  const handleMouseLeave = useCallback(() => {
    if (enableHover) {
      initializeAnimation();
    }
  }, [enableHover, initializeAnimation]);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        controls.set({
          dragConstraints: { left: 0, right: containerRef.current.offsetWidth },
        });
      }
    };
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => {
      window.removeEventListener('resize', updateConstraints);
    };
  }, [controls]);

  return (
    <div
      className={cn('relative flex items-center justify-center', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div
        className="w-full flex items-center relative overflow-hidden"
        dir="ltr"
      >
        <div className="absolute -left-4 bottom-0 h-full w-12 bg-gradient-to-r from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack blur-[20px] pointer-events-none z-10" />
        <motion.div
          className="flex items-center"
          animate={controls}
          drag={enableHover ? 'x' : false}
          dragConstraints={containerRef}
          dragElastic={0.1}
          dragMomentum={false}
        >
          {[...Array(arrayNumber)].map((_, i) => (
            <React.Fragment key={i}>{children}</React.Fragment>
          ))}
        </motion.div>
        <div className="absolute -right-4 top-0 h-full w-12 bg-gradient-to-l from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack blur-[20px] pointer-events-none z-10" />
      </div>
    </div>
  );
};

MovingSliderHover.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  arrayNumber: PropTypes.number,
  enableHover: PropTypes.bool,
  className: PropTypes.string,
};

export default React.memo(MovingSliderHover);
