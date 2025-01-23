import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

const CounterCard = ({ num, symbol, title, iconLight, iconDark }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({
        count: num,
        transition: {
          duration: 1.5,
          ease: 'easeOut',
        },
      });
      setHasAnimated(true);
    }
  }, [inView, num, hasAnimated, controls]);

  return (
    <div
      ref={ref}
      className="w-72 md:w-auto rounded-site border-[1px] border-light-border dark:border-secondary-text bg-secondaryLightWhite dark:bg-secondaryDarkBlack p-4 flex justify-between"
      aria-label={`${title} statistics`}
    >
      <figure className="w-[70px] xl:w-[80px] flex items-center justify-center">
        <img
          src={iconLight}
          alt={title}
          className="no-drag-img block dark:hidden"
        />
        <img
          src={iconDark}
          alt={title}
          className="no-drag-img hidden dark:block"
        />
      </figure>
      <div className="flex flex-col items-center justify-center w-2/3">
        <p className="flex items-center bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent">
          <span className="text-lg md:text-xl font-semibold">{symbol}</span>
          <motion.span
            className="text-2xl md:text-3xl font-bold ml-1"
            initial={{ count: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            onUpdate={(latest) => {
              document.querySelector(`[data-counter="${title}"]`).innerText =
                Math.floor(latest.count);
            }}
            data-counter={title}
          >
            {Math.floor(num)}
          </motion.span>
        </p>
        <p className="w-full text-center text-lg text-light-text dark:text-primary-text">
          {title}
        </p>
      </div>
    </div>
  );
};

CounterCard.propTypes = {
  num: PropTypes.number.isRequired,
  symbol: PropTypes.string,
  title: PropTypes.string.isRequired,
  iconLight: PropTypes.node,
  iconDark: PropTypes.node,
};

export default CounterCard;
