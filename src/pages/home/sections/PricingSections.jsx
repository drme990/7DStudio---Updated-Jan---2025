import { useState, useEffect, useMemo, useCallback } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import MyContainer from '../../../components/MyContainer';
import {
  Description,
  LatinSpan,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import PricingCard from '../components/PricingCard';
import SmallPricingCard from '../components/SmallPricingCard';
import MovingSliderHover from '../../../components/MovingSliderHover';
import CurrencySelector from '../components/CurrencySelector';

const packages = [
  {
    type: 'basic',
    packageName: 'logoDesign',
    features: {
      'pricing.features.one': true,
      'pricing.features.two': true,
      'pricing.features.three': true,
      'pricing.features.four': false,
      'pricing.features.five': false,
      'pricing.features.six': false,
      'pricing.features.seven': false,
      'pricing.features.eight': false,
      'pricing.features.nine': false,
    },
    prices: { USD: '350', SAR: '350', EGP: '350' },
  },
  {
    type: 'intermediate',
    packageName: 'brandIdentityDesign',
    features: {
      'pricing.features.one': true,
      'pricing.features.two': true,
      'pricing.features.three': true,
      'pricing.features.four': true,
      'pricing.features.five': true,
      'pricing.features.six': true,
      'pricing.features.seven': true,
      'pricing.features.eight': false,
      'pricing.features.nine': false,
    },
    prices: { USD: '700', SAR: '700', EGP: '700' },
  },
  {
    type: 'advanced',
    packageName: 'fullBrandIdentity',
    features: {
      'pricing.features.one': true,
      'pricing.features.twoS': true,
      'pricing.features.three': true,
      'pricing.features.four': true,
      'pricing.features.five': true,
      'pricing.features.six': true,
      'pricing.features.seven': true,
      'pricing.features.eight': true,
      'pricing.features.nine': true,
    },
    prices: { USD: '1,200', SAR: '1,200', EGP: '1,200' },
  },
];

const otherPackages = [
  {
    packageName: 'basicLogoAnimation',
    features: 'pricing.otherPackages.one',
    prices: {
      USD: '150',
      SAR: '150',
      EGP: '150',
    },
  },
  {
    packageName: 'advancedLogoAnimation',
    features: 'pricing.otherPackages.two',
    prices: {
      USD: '300',
      SAR: '300',
      EGP: '300',
    },
  },
  {
    packageName: 'socialMediaDesigns',
    features: 'pricing.otherPackages.three',
    prices: {
      USD: '400',
      SAR: '400',
      EGP: '400',
    },
  },
  {
    packageName: 'graphicsDesign',
    features: 'pricing.otherPackages.four',
    prices: {
      ask: "Let's Talk",
    },
  },
  {
    packageName: 'websiteDesign',
    features: 'pricing.otherPackages.five',
    prices: {
      ask: "Let's Talk",
    },
  },
  {
    packageName: 'socialMediaManagement',
    features: 'pricing.otherPackages.six',
    prices: {
      USD: '500/month',
      SAR: '500/month',
      EGP: '500/month',
    },
  },
  {
    packageName: 'managingAdsCampaigns',
    features: 'pricing.otherPackages.seven',
    prices: {
      USD: '700/month',
      SAR: '700/month',
      EGP: '700/month',
    },
  },
];

const PricingSections = () => {
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({
    USD: 1,
    SAR: 1,
    EGP: 1,
  });
  const { t } = useTranslation();
  const lang = i18next.language;

  // Fetch exchange rates only once when the component mounts
  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
        );
        const data = await response.json();
        const egpRate = data.usd.egp;
        const sarRate = data.usd.sar;

        setExchangeRates({ USD: 1, SAR: sarRate, EGP: egpRate });
      } catch (error) {
        console.error(
          'Error fetching data from primary source, trying fallback...',
          error
        );

        const fallbackResponse = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/usd.json`
        );
        const fallbackData = await fallbackResponse.json();
        const egpRate = fallbackData.usd.egp;
        const sarRate = fallbackData.usd.sar;

        setExchangeRates({ USD: 1, SAR: sarRate, EGP: egpRate });
      }
    };

    getExchangeRate();
  }, []); // Only run once on mount

  // Memoize the price conversion logic to prevent recalculating on each render
  const convertPrice = useCallback(
    (price, currency) => {
      const formatPrice = (value) => new Intl.NumberFormat().format(value);

      const priceValue = parseFloat(price.replace(/[^\d.-]/g, ''));
      const formattedPrice = formatPrice(priceValue);

      if (price.includes('/month')) {
        if (currency === 'USD')
          return lang === 'en'
            ? `${t('pricing.USDs')}${formattedPrice} /month`
            : `${formattedPrice}${t('pricing.USDs')} /month`;
        if (currency === 'SAR')
          return `${formatPrice(
            (priceValue * exchangeRates.SAR).toFixed(0)
          )} ${t('pricing.SAR')}/month`;
        if (currency === 'EGP')
          return `${formatPrice(
            (priceValue * exchangeRates.EGP).toFixed(0)
          )} ${t('pricing.EGP')}/month`;
      } else {
        if (currency === 'USD')
          return lang === 'en'
            ? `${t('pricing.USDs')}${formattedPrice}`
            : `${formattedPrice}${t('pricing.USDs')}`;
        if (currency === 'SAR')
          return `${formatPrice(
            (priceValue * exchangeRates.SAR).toFixed(0)
          )} ${t('pricing.SAR')}`;
        if (currency === 'EGP')
          return `${formatPrice(
            (priceValue * exchangeRates.EGP).toFixed(0)
          )} ${t('pricing.EGP')}`;
      }
    },
    [exchangeRates, t, lang]
  ); // Depend on exchangeRates to avoid unnecessary recalculations

  // Memoize the pricing cards and slider for better performance
  const renderPricingCards = useMemo(() => {
    return packages.map((pkg, index) => (
      <PricingCard
        key={index}
        packageName={t('pricing.packages.' + pkg.packageName)}
        type={t('pricing.packages.' + pkg.type)}
        features={pkg.features}
        prices={{
          ...pkg.prices,
          [currency]: convertPrice(pkg.prices[currency], currency),
        }}
        currency={currency}
        className={'w-[310px] sm:w-[350px]'}
        special={index === 1}
        setCurrency={setCurrency}
      />
    ));
  }, [currency, convertPrice, t]);

  const renderSmallPricingCards = useMemo(() => {
    return otherPackages.map((pkg, index) => (
      <SmallPricingCard
        key={index}
        packageName={t('pricing.otherPackages.' + pkg.packageName)}
        features={t(pkg.features)}
        prices={{
          ...pkg.prices,
          [currency]: pkg.prices[currency]
            ? convertPrice(pkg.prices[currency], currency)
            : "Let's Talk",
        }}
        currency={currency}
        className={'w-[350px]'}
      />
    ));
  }, [currency, convertPrice, t]);

  return (
    <Section id={'pricing'}>
      <MyContainer className="flex flex-col gap-[19.5px] text-gap mb-8">
        <LittleTitle>{t('pricing.titleDis')}</LittleTitle>
        <Title>
          {t('pricing.title')} <LatinSpan>{t('pricing.YourNeeds')} </LatinSpan>
        </Title>
        <Description>{t('pricing.description')}</Description>
      </MyContainer>
      <MyContainer className="mt-16 flex flex-col md:flex-row gap-4 justify-center md:items-start items-center flex-nowrap md:flex-wrap">
        <CurrencySelector
          currency={currency}
          setCurrency={setCurrency}
          className={`flex justify-center items-center ${
            lang === 'ar' ? 'gap-2 md:gap-8 px-4 md:px-8' : 'gap-8 px-8'
          } bg-secondaryLightWhite dark:bg-primaryDarkBlack border-[1px] border-light-border dark:border-secondary-text rounded-site py-4 w-fit mx-auto`}
        />
      </MyContainer>
      <MyContainer className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:items-start items-center flex-nowrap md:flex-wrap">
        {renderPricingCards}
      </MyContainer>
      <MyContainer className="py-4">
        <MovingSliderHover speed={320} arrayNumber={10} enableHover>
          {renderSmallPricingCards}
        </MovingSliderHover>
      </MyContainer>
    </Section>
  );
};

export default PricingSections;
