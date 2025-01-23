import i18next from 'i18next';
import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

export const Title = ({ children, className }) => {
  const lang = i18next.language;

  return (
    <h2
      className={cn(
        `text-site md:text-site-md text-center ${
          lang === 'ar' ? 'leading-site-arabic' : 'tracking-site leading-site'
        }`,
        className
      )}
      aria-label={children}
    >
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const LittleTitle = ({ children, className }) => {
  return (
    <div className="flex justify-center items-center">
      <p
        className={cn(
          'bg-secondaryLightWhite dark:bg-primaryDarkBlack text-primaryDarkBlack dark:text-primaryLightWhite border border-light-border dark:border-secondary-text px-4 py-[7px] rounded-[14px] w-fit text-center',
          className
        )}
        aria-label={children}
      >
        {children}
      </p>
    </div>
  );
};

LittleTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Description = ({ children, className }) => {
  const lang = i18next.language;
  return (
    <p
      className={cn(
        `text-center text-[17px] md:text-[20px] text-light-text dark:text-primary-text lg:max-w-2xl px-6 text md:px-20 lg:px-0 ${
          lang === 'ar' ? 'leading-siteMd-arabic' : 'leading-siteMd'
        } max-w-2xl mx-auto`,
        className
      )}
      aria-label={children}
    >
      {children}
    </p>
  );
};

Description.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Section = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={cn('container mx-auto py-8 px-4 md:px-8', className)}
      aria-label={id + ' section'}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export const LatinSpan = ({ children, className }) => {
  const lang = i18next.language;

  return (
    <span
      className={cn(`${lang === 'en' && 'italic font-Instrument'}`, className)}
      aria-label={children}
    >
      {children}
    </span>
  );
};

LatinSpan.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
