import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import Container from './container';

import { FaBehance } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';

const quickLinks = [
  { name: 'ourProjects', href: 'our-projects' },
  { name: 'process', href: 'process' },
  { name: 'benefits', href: 'benefits' },
  { name: 'services', href: 'services' },
  { name: 'pricing', href: 'pricing' },
  { name: 'FAQs', href: 'FAQs' },
];

const Footer = () => {
  const { t } = useTranslation();
  const date = new Date().getFullYear();

  return (
    <footer aria-label="Footer">
      <Container className="rounded-t-site p-4 z-30 bg-secondaryLightWhite/50 dark:bg-secondaryDarkBlack/50 backdrop-blur-sm">
        <div
          className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4"
          dir="ltr"
        >
          {/* Company Info */}
          <div className="space-y-4 w-fit">
            <Logo size="footer" />
          </div>

          {/* Features & Links */}
          <div>
            <h5 className="text-lg font-semibold mb-2">
              {t('footer.quickLinks')}
            </h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={`/?scrollTo=${link.href}`}
                  className="hover:bg-gradient-to-t hover:from-[#FF7B00] hover:via-[#FFDA00] hover:to-[#FFE48B] hover:bg-clip-text hover:text-transparent"
                >
                  {t(`nav.${link.name}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {t('footer.connectWithUs')}
            </h3>
            <ul className="flex space-x-4 text-2xl">
              <li>
                <a
                  href="https://www.behance.net/drme99"
                  aria-label={t('footer.behance')}
                  rel="noopener noreferrer"
                >
                  <FaBehance className="hover:scale-110 duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/7.d.stud/"
                  aria-label={t('footer.instagram')}
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:scale-110 duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/sevendesign99"
                  aria-label={t('footer.twitter')}
                  rel="noopener noreferrer"
                >
                  <RiTwitterXLine className="hover:scale-110 duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sevendesign99"
                  aria-label={t('footer.facebook')}
                  rel="noopener noreferrer"
                >
                  <MdFacebook className="hover:scale-110 duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-600 my-6" />

        <div className="flex flex-col lg:flex-row justify-between items-center text-sm px-4">
          <p>
            &copy; {date} <span className="font-bold">{t('companyName')}</span>.{' '}
            {t('footer.allRightsReserved')}
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link
              to="/terms-conditions"
              className="hover:bg-gradient-to-t hover:from-[#FF7B00] hover:via-[#FFDA00] hover:to-[#FFE48B] hover:bg-clip-text hover:text-transparent"
            >
              {t('footer.termsConditions')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
