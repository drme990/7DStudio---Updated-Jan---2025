import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';
import MyContainer from '../../../components/MyContainer';
import { Section } from '../../../components/Section';
import TextAnimation from '../../../components/TextAnimation';
import Glow from '../../../components/Glow';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pb-20 overflow-hidden bg-primaryLightWhite dark:bg-primaryDarkBlack">
      <Section id={'home'}>
        <MyContainer>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-[41px] text-gap -mb-10 md:mb-0">
              <div className="w-fit flex items-center gap-2 py-2 px-4 rounded-lg border-[1px] border-primaryDarkBlack dark:border-primary">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                <p className=" text-center text-xs font-semibold">
                  {t('home.heroSection.hurry')}
                </p>
              </div>
              <TextAnimation />
              <div className="flex gap-6 z-10">
                <Button type="link" to="/meeting-booking">
                  {t('buttons.bookACall')}
                </Button>
                <Button type="scroll" variant="secondary" to="logos">
                  {t('buttons.learnMore')}
                </Button>
              </div>
            </div>
            <Glow isMoving={true} />
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-primaryLightWhite dark:from-primaryDarkBlack via-primaryLightWhite dark:via-primaryDarkBlack to-transparent blur-[10px]" />
            <div className="absolute -bottom-1 w-full h-6 bg-primaryLightWhite dark:bg-primaryDarkBlack blur-[2px]" />
          </div>
        </MyContainer>
      </Section>
    </div>
  );
};

export default HeroSection;
