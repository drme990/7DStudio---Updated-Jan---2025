import { useTranslation } from 'react-i18next';
import MyContainer from '../../../components/MyContainer';
import {
  Description,
  LatinSpan,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import SecCard from '../components/SecCard';

/* import the icons */
import expertDesigners from '../../../assets/icons/expertDesigners.gif';
import uniqueDesigns from '../../../assets/icons/uniqueDesigns.gif';
import engagingVisuals from '../../../assets/icons/engagingVisuals.gif';
import fastDelivery from '../../../assets/icons/fastDelivery.gif';
import transparentPricing from '../../../assets/icons/transparentPricing.gif';
import fullSatisfaction from '../../../assets/icons/fullSatisfaction.gif';
import expertDesignersBlack from '../../../assets/icons/expertDesigners-black.gif';
import uniqueDesignsBlack from '../../../assets/icons/uniqueDesigns-black.gif';
import engagingVisualsBlack from '../../../assets/icons/engagingVisuals-black.gif';
import fastDeliveryBlack from '../../../assets/icons/fastDelivery-black.gif';
import transparentPricingBlack from '../../../assets/icons/transparentPricing-black.gif';
import fullSatisfactionBlack from '../../../assets/icons/fullSatisfaction-black.gif';

const Benefits = [
  {
    title: 'benefits.expertDesignersTitle',
    description: 'benefits.expertDesignersDescription',
    iconDark: expertDesigners,
    iconLight: expertDesignersBlack,
  },
  {
    title: 'benefits.uniqueDesignsTitle',
    description: 'benefits.uniqueDesignsDescription',
    iconDark: uniqueDesigns,
    iconLight: uniqueDesignsBlack,
  },
  {
    title: 'benefits.engagingVisualsTitle',
    description: 'benefits.engagingVisualsDescription',
    iconDark: engagingVisuals,
    iconLight: engagingVisualsBlack,
  },
  {
    title: 'benefits.fastDeliveryTitle',
    description: 'benefits.fastDeliveryDescription',
    iconDark: fastDelivery,
    iconLight: fastDeliveryBlack,
  },
  {
    title: 'benefits.transparentPricingTitle',
    description: 'benefits.transparentPricingDescription',
    iconDark: transparentPricing,
    iconLight: transparentPricingBlack,
  },
  {
    title: 'benefits.fullSatisfactionTitle',
    description: 'benefits.fullSatisfactionDescription',
    iconDark: fullSatisfaction,
    iconLight: fullSatisfactionBlack,
  },
];

const BenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <Section id={'benefits'}>
      <MyContainer className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>{t('benefits.sectionTitle')}</LittleTitle>
        <Title>
          {t('benefits.why')} <LatinSpan>{t('benefits.us')}</LatinSpan>
        </Title>
        <Description>{t('benefits.description')}</Description>
      </MyContainer>
      <MyContainer className="mt-16">
        <div className="w-full flex justify-around items-center gap-16 flex-col md:flex-row flex-wrap">
          {Benefits.map((benefit, index) => (
            <SecCard
              key={index}
              title={t(benefit.title)}
              description={t(benefit.description)}
              iconDark={benefit.iconDark}
              iconLight={benefit.iconLight}
            />
          ))}
        </div>
      </MyContainer>
    </Section>
  );
};

export default BenefitsSection;
