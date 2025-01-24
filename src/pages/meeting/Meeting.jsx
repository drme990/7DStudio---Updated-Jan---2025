import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Calendly from './components/Calendly';
import Footer from '../../components/Footer';
import { LatinSpan } from '../../components/Section';
import Container from '../../components/container';
import SecCard from '../home/components/SecCard';
import Glow from '../../components/Glow';

import logo from '../../assets/logo-textl.png';
import apologize from '../../assets/icons/apologize.gif';
import apologizeBlack from '../../assets/icons/apologize-black.gif';
import GoBackTop from '../../components/GoBackTop';
import WistiaPlayer from './components/WistiaPlayer';

const Meeting = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

  return (
    <div className="relative">
      <Helmet>
        <title>Seven Design Studio | Book your call with us</title>
        <meta
          name="description"
          content="Seven Design Studio specializes in creating premium logo designs and luxury branding for high-end businesses in Saudi Arabia, UAE, Qatar, and GCC. We turn simple concepts into iconic brands. Elevate your brand with us."
        />
        <meta
          name="keywords"
          content="Luxury logo design, Premium branding agency, High-end brand identity, Logo design studio in GCC, Luxury branding in Saudi Arabia, Iconic brand design, Professional logo design, Branding for high-end businesses, Creative logo design in UAE, Corporate branding in Qatar, تصميم لوجو فاخر, تصميم هوية بصرية للفئة العليا, تصميم براند في الخليج, استوديو تصميم لوجو في السعودية, تصميم هوية بصرية فاخرة, تصميم لوجو في دبي, خدمات تصميم العلامات التجارية, تصميم لوجو احترافي, تصميم براند للشركات الراقية,  تصميم لوجو في قطر"
        />
        <meta name="author" content="Seven Design Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <GoBackTop />
      <h1 className="text-secondary-text font-semibold text-center py-4 bg-gradient-to-t-orange">
        {t('meeting.spotsAvailable')}
      </h1>
      <div className="h-10 w-full bg-[#FF7B00]">
        <div className="h-10 w-full bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-t-full"></div>
      </div>
      <div className="grid-bg overflow-hidden">
        <header className="bg-gradient-to-b from-primaryLightWhite dark:from-primaryDarkBlack to-transparent">
          <nav className="flex flex-col items-center justify-center gap-8 pt-2 pb-16">
            <div className="flex items-center justify-center w-32 xl:w-36">
              <Link to="/">
                <img src={logo} alt={t('meeting.logoAlt')} />
              </Link>
            </div>
            <hr
              className="h-[1px] bg-secondary-text border-none w-1/2"
              aria-hidden="true"
            />
          </nav>
        </header>
        <main className="flex flex-col ">
          <div className="flex flex-col gap-[19.5px] text-gap">
            <Container>
              <div className="w-auto mx-4 md:mx-0 backdrop-blur bg-secondaryLightWhite flex flex-col items-center justify-center gap-[19.5px] text-gap border-[1px] border-light-border dark:border-secondary-text dark:bg-secondaryDarkBlack py-8 rounded-3xl">
                <div className="px-2 md:px-8">
                  <h1
                    className={`text-center text-site md:text-site-md ${
                      lang === 'ar'
                        ? 'leading-site-arabic'
                        : 'tracking-site leading-site'
                    }`}
                  >
                    {t('meeting.hopOnCall')}{' '}
                    <LatinSpan>{t('meeting.call')}</LatinSpan>{' '}
                    {t('meeting.withUs')}
                  </h1>
                </div>
                <div
                  className={`flex flex-col gap-3 justify-center items-center text-light-text dark:text-primary-text text-lg text-center text-[17px] md:text-[20px] max-w-md lg:max-w-xl px-6 text md:px-20 ${
                    lang === 'ar' ? 'leading-siteMd-arabic' : 'leading-siteMd'
                  }`}
                >
                  <p>{t('meeting.acceptingClients')}</p>
                  <p>{t('meeting.bookNow')}</p>
                </div>
              </div>
            </Container>
            <div className="relative flex flex-col lg:flex-row gap-4 items-center lg:items-start justify-center">
              <div className="absolute w-4/6 h-4/6 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] opacity-30"></div>
              <div className="w-11/12 lg:w-1/3 z-10 max-w-xl">
                <WistiaPlayer
                  videoId="v8g9mwx7d6"
                  wrapper="wistia-player-container-1"
                />
              </div>
              <div className="w-full lg:w-1/3 z-10 max-w-xl">
                <Calendly />
              </div>
            </div>
          </div>
          <Container className="mb-16">
            <SecCard
              className="md:w-auto md:max-w-lg bg-secondaryLightWhite/50 dark:bg-secondaryDarkBlack/50 backdrop-blur-sm relative z-10"
              description={t('meeting.apologyMessage')}
              iconLight={apologizeBlack}
              iconDark={apologize}
            />
          </Container>
        </main>
      </div>
      <div className="h-8 md:h-16 z-0">
        <Glow
          className="absolute bottom-[600px] md:bottom-[450px] translate-y-full"
          isMoving={false}
          shrink={true}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Meeting;
