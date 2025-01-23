import PropTypes from 'prop-types';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { cn } from '../../../lib/utils';
import Button from '../../../components/Button';
import { LittleTitle } from '../../../components/Section';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io';
import SpecialGlow from './SpecialGlow';
import CurrencySelector from './CurrencySelector';

const PricingCard = ({
  packageName,
  type,
  features,
  prices,
  currency,
  className,
  special,
  setCurrency,
}) => {
  const price = prices[currency] || prices.ask;
  const displayPrice =
    typeof price === 'string' ? price : `${price} ${currency}`;

  const lang = i18next.language;
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        'flex flex-col relative border border-light-border dark:border-secondary-text rounded-site px-4 py-8 max-w-md bg-secondaryLightWhite dark:bg-primaryDarkBlack overflow-hidden',
        className
      )}
    >
      {type && (
        <LittleTitle className="text-center mb-4 relative z-10 border-gray-500/20">
          {type}
        </LittleTitle>
      )}
      {special && (
        <SpecialGlow className="absolute -top-1/2 -right-1/2 z-[1]" />
      )}
      <div className="z-[2]">
        <h5 className="text-2xl mb-2 text-center">{packageName}</h5>
        <div className="flex flex-col gap-4 justify-between items-center mb-4">
          <p className="text-2xl">{displayPrice}</p>
          <CurrencySelector
            currency={currency}
            setCurrency={setCurrency}
            className="flex gap-2"
          />
          <hr className="w-11/12 border-secondary-text" />
        </div>
        <ul className="py-2">
          {Object.entries(features).map(([feature, isIncluded], index) => (
            <li key={index} className="flex items-start mb-2">
              <span
                className={`${lang === 'ar' ? 'ml-2' : 'mr-2'} ${
                  isIncluded
                    ? 'bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent'
                    : 'text-light-text dark:text-primary-text'
                }`}
                role="img"
              >
                {isIncluded ? (
                  <IoIosCheckmarkCircleOutline
                    size={20}
                    className="text-black dark:fill-[url(#icon-gradient)]"
                  />
                ) : (
                  <IoIosCloseCircleOutline size={20} />
                )}
              </span>
              <span
                className={`${
                  isIncluded ? '' : 'text-light-text dark:text-primary-text'
                }`}
              >
                {t(feature)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Button type="link" to="meeting-booking" className="mt-4">
        {t('buttons.getStarted')}
      </Button>
    </div>
  );
};

PricingCard.propTypes = {
  packageName: PropTypes.string.isRequired,
  features: PropTypes.objectOf(PropTypes.bool).isRequired,
  prices: PropTypes.shape({
    USD: PropTypes.string,
    SAR: PropTypes.string,
    EGP: PropTypes.string,
    ask: PropTypes.string,
  }).isRequired,
  currency: PropTypes.string.isRequired,
  setCurrency: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  special: PropTypes.bool,
};

export default PricingCard;
