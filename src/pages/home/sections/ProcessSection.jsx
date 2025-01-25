import { useTranslation } from 'react-i18next';
import MyContainer from '../../../components/MyContainer';
import {
  Section,
  Description,
  Title,
  LittleTitle,
  LatinSpan,
} from '../../../components/Section';
import SecCard from '../components/SecCard';

/* Import the icons */
import enroll from '../../../assets/icons/enroll.gif';
import share from '../../../assets/icons/share.gif';
import receive from '../../../assets/icons/receive.gif';

import enrollBlack from '../../../assets/icons/enroll-black.gif';
import shareBlack from '../../../assets/icons/share-black.gif';
import receiveBlack from '../../../assets/icons/receive-black.gif';

const process = [
  {
    title: 'process.enrollTitle',
    description: 'process.enrollDescription',
    iconDark: enroll,
    iconLight: enrollBlack,
  },
  {
    title: 'process.shareTitle',
    description: 'process.shareDescription',
    iconDark: share,
    iconLight: shareBlack,
  },
  {
    title: 'process.receiveTitle',
    description: 'process.receiveDescription',
    iconDark: receive,
    iconLight: receiveBlack,
  },
];

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <Section id={'process'}>
      <MyContainer className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>{t('process.sectionTitle')}</LittleTitle>
        <Title>
          {t('process.howIt')} <LatinSpan>{t('process.works')}</LatinSpan>
        </Title>
        <Description>{t('process.description')}</Description>
      </MyContainer>
      <MyContainer className="mt-16">
        <div className="w-full flex justify-around items-center gap-16 flex-col md:flex-row flex-wrap">
          {process.map((item, index) => (
            <SecCard
              key={index}
              iconLight={item.iconLight}
              iconDark={item.iconDark}
              title={t(item.title)}
              description={t(item.description)}
            />
          ))}
        </div>
      </MyContainer>
    </Section>
  );
};

export default ProcessSection;
