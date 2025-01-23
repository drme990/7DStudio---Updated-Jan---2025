import PropTypes from 'prop-types';
import { useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, terms }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const lang = i18next.language;

  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-72 md:w-full border-[1px] bg-secondaryLightWhite dark:bg-secondaryDarkBlack border-light-border dark:border-secondary-text rounded-md mb-4 px-4">
      <button
        onClick={toggleAnswer}
        className={`flex justify-between gap-4 w-full py-4 text-lg ${
          lang === 'ar' ? 'text-right' : 'text-left'
        } focus:outline-none`}
      >
        <span>{t('faq.q.' + question)}</span>
        <span
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div
          className={`pb-4 text-light-text dark:text-primary-text ${
            isOpen ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'
          }`}
        >
          <span
            className={
              lang === 'ar' ? 'leading-siteMd-arabic' : 'leading-siteMd'
            }
          >
            {t('faq.a.' + answer)}
          </span>{' '}
          {terms && (
            <Link to="/terms-conditions" className="underline">
              {t('faq.terms')}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  terms: PropTypes.bool,
};

export default FAQItem;
