import PropTypes from 'prop-types';
import i18next from 'i18next';
import { cn } from '../../../lib/utils';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, testimonial, title, image, className }) => {
  const lang = i18next.language;

  return (
    <figure
      className={cn(
        'bg-secondaryLightWhite dark:bg-secondaryDarkBlack mx-2 rounded-site p-6 min-w-fit h-[255px] border-[1px] border-light-border dark:border-secondary-text flex flex-col gap-3',
        className
      )}
      aria-labelledby={`testimonial-${name}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <header className="flex items-center">
        <div className="flex items-center">
          <img
            src={image}
            alt={`${name}'s profile`}
            className={`w-9 h-9 rounded-full ${
              lang === 'ar' ? 'ml-4' : 'mr-4'
            } select-none`}
            loading="lazy"
          />
        </div>
        <div>
          <h2 id={`testimonial-${name}`} className="text-base">
            {name}
          </h2>
          <div className="flex items-center text-">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className="mr-1 dark:fill-[url(#icon-gradient)]"
              />
            ))}
          </div>
        </div>
      </header>
      <blockquote
        className={`${
          lang === 'ar' ? 'leading-siteMd-arabic' : 'leading-siteMd'
        } text-light-text dark:text-primary-text max-w-xs`}
        aria-label={`Testimonial description from ${name}`}
      >
        {testimonial}
      </blockquote>
      <figcaption
        className="text-end text-light-text dark:text-primary-text"
        aria-label={`Testimonial source: ${title}`}
      >
        — <span className="text-sm">{title}</span>
      </figcaption>
    </figure>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TestimonialCard;
