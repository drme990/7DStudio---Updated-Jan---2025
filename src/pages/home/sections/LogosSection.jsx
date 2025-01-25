import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Section } from '../../../components/Section';
import MyContainer from '../../../components/MyContainer';
import MovingSlider from '../../../components/MovingSlider';
import BannerImg from '../../../components/BannerImg';
import Button from '../../../components/Button';
import { myLogosWhite, myLogosBlack } from '../../../services/myLogos';

import { FaArrowRightLong } from 'react-icons/fa6';

const LogosSection = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

  return (
    <Section id={'logos'}>
      <MyContainer>
        <p className="text-center pt-2 mb-4 text-light-text dark:text-primary-text text">
          {t('home.logosSection.littleTitle')}
        </p>
        <MovingSlider
          speed={200}
          direction="normal"
          orientation="row"
          arrayNumber={8}
          className="hidden dark:block"
        >
          {myLogosWhite.map((logo, index) => (
            <BannerImg key={index} img={logo.img} />
          ))}
        </MovingSlider>
        <MovingSlider
          speed={200}
          direction="normal"
          orientation="row"
          arrayNumber={8}
          className="block dark:hidden"
        >
          {myLogosBlack.map((logo, index) => (
            <BannerImg key={index} img={logo.img} />
          ))}
        </MovingSlider>
        <div className="flex items-center justify-center">
          <a
            href="https://www.behance.net/drme99"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="secondary"
              className="mt-8 mb-4 flex items-center gap-2 hover:gap-3"
            >
              <FaArrowRightLong
                className={`${lang === 'en' ? '' : 'rotate-180'}`}
              />
              {t('buttons.discoverMore')}
            </Button>
          </a>
        </div>
      </MyContainer>
    </Section>
  );
};

export default LogosSection;
