import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';
import { useTranslation } from 'react-i18next';

const CurrencySelector = ({ currency, setCurrency, className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn('flex text-sm', className)}>
      <span
        className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site overflow-hidden border-[1px] ${
          currency === 'USD' ? 'border-[#676767]' : 'border-[#d2d2d2]'
        } dark:border-secondary-text `}
      >
        <button
          onClick={() => setCurrency('USD')}
          className={`bg-secondaryLightWhite dark:bg-secondaryDarkBlack ${
            currency === 'USD'
              ? 'text-[#676767] dark:bg-gradient-to-t-orange dark:bg-clip-text dark:text-transparent'
              : 'text-[#d2d2d2] dark:text-primaryLightWhite'
          } p-2`}
        >
          {t('pricing.USD')}
        </button>
      </span>
      <span
        className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site overflow-hidden border-[1px] ${
          currency === 'SAR' ? 'border-[#676767]' : 'border-[#d2d2d2]'
        } dark:border-secondary-text `}
      >
        <button
          onClick={() => setCurrency('SAR')}
          className={`bg-secondaryLightWhite dark:bg-secondaryDarkBlack ${
            currency === 'SAR'
              ? 'text-[#676767] dark:bg-gradient-to-t-orange dark:bg-clip-text dark:text-transparent'
              : 'text-[#d2d2d2] dark:text-primaryLightWhite'
          } p-2`}
        >
          {t('pricing.SAR')}
        </button>
      </span>
      <span
        className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site overflow-hidden border-[1px] ${
          currency === 'EGP' ? 'border-[#676767]' : 'border-[#d2d2d2]'
        } dark:border-secondary-text `}
      >
        <button
          onClick={() => setCurrency('EGP')}
          className={`bg-secondaryLightWhite dark:bg-secondaryDarkBlack ${
            currency === 'EGP'
              ? 'text-[#676767] dark:bg-gradient-to-t-orange dark:bg-clip-text dark:text-transparent'
              : 'text-[#d2d2d2] dark:text-primaryLightWhite'
          } p-2`}
        >
          {t('pricing.EGP')}
        </button>
      </span>
    </div>
  );
};

CurrencySelector.propTypes = {
  currency: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CurrencySelector;
