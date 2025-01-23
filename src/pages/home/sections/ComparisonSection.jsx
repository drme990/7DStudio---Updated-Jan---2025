import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Container from '../../../components/container';
import {
  Section,
  Title,
  LittleTitle,
  LatinSpan,
} from '../../../components/Section';
import ComparisonCard from '../components/ComparisonCard';
import { FaCheck } from 'react-icons/fa6';
import { TfiClose } from 'react-icons/tfi';

import logo from '../../../assets/logo-textl.png';

const ComparisonSection = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

  const otherAgencies = [
    'comparison.otherAgencies.genericLogoDesigns',
    'comparison.otherAgencies.noFreeRevisions',
    'comparison.otherAgencies.noBrandGuidelines',
    'comparison.otherAgencies.slowDelivery',
    'comparison.otherAgencies.noIndustryResearch',
  ];

  const sevenDesignStudio = [
    'comparison.sevenDesignStudio.uniqueLogoDesigns',
    'comparison.sevenDesignStudio.upToFreeRevisions',
    'comparison.sevenDesignStudio.comprehensiveBrandGuidelines',
    'comparison.sevenDesignStudio.fastDelivery',
    'comparison.sevenDesignStudio.industryResearch',
  ];

  return (
    <Section id="comparison" aria-labelledby="comparison-title">
      <Container className="flex flex-col gap-5 text-gap">
        <LittleTitle id="comparison-title">
          {t('comparison.sectionTitle')}
        </LittleTitle>
        <Title>
          {t('comparison.whyWorking')} {lang === 'ar' && <br />}
          <LatinSpan>{t('comparison.different')}</LatinSpan>
        </Title>
      </Container>
      <Container className="flex flex-col md:flex-row items-center justify-center gap-11 md:gap-16 lg:gap-24 mt-16">
        <div className="w-full flex flex-col items-center justify-center md:max-w-[450px]">
          <h3
            className="text-center text-light-text dark:text-primary-text text-2xl mb-12 mt-2"
            aria-label="Other Agencies"
          >
            {t('comparison.otherAgencies.title')}
          </h3>
          <ComparisonCard className="text-[rgba(0,0,0,0.5)] dark:text-primary-text">
            <ul className="space-y-6" role="list">
              {otherAgencies.map((item, index) => (
                <li key={`other-${index}`} className="flex items-center gap-2">
                  <span aria-hidden="true">
                    <TfiClose size={18} />
                  </span>
                  <span className="ml-1 text-lg">{t(item)}</span>
                </li>
              ))}
            </ul>
          </ComparisonCard>
        </div>
        <div className="w-full flex flex-col items-center justify-center md:max-w-[450px]">
          <h3
            className="flex items-center justify-center gap-4 mb-8"
            aria-label="Seven Design Studio"
          >
            <img
              src={logo}
              alt="Seven Design Studio"
              className="w-32 md:w-44 no-drag-img"
            />
          </h3>
          <ComparisonCard type="glow">
            <ul className="space-y-6 z-10" role="list">
              {sevenDesignStudio.map((item, index) => (
                <li key={`seven-${index}`} className="flex items-center gap-2">
                  <span aria-hidden="true">
                    <FaCheck
                      size={18}
                      className="dark:fill-[url(#icon-gradient)]"
                    />
                  </span>
                  <span className="ml-1 text-lg">{t(item)}</span>
                </li>
              ))}
            </ul>
          </ComparisonCard>
        </div>
      </Container>
    </Section>
  );
};

export default ComparisonSection;
