import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Button from './Button';
import ToggleLang from './ToggleLang';
import Logo from './Logo';
import ToggleDark from './ToggleDark';
import HumMenu from './HumMenu';
import { useTranslation } from 'react-i18next';

const navItems = [
  { name: 'ourProjects', href: 'our-projects' },
  { name: 'process', href: 'process' },
  { name: 'benefits', href: 'benefits' },
  { name: 'services', href: 'services' },
  { name: 'pricing', href: 'pricing' },
];

const slideVariants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }, // Increased duration for smoother transition
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6, ease: 'easeOut' }, // Staggered animations for items
  }),
};

const menuVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.6, ease: 'easeInOut' }, // Smoother opening animation
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.4, ease: 'easeInOut' }, // Smoother closing animation
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      style={{ willChange: 'transform, opacity' }}
      className="fixed xl:top-5 top-0 bg-transparent inset-x-0 xl:border-[1px] border-b-[1px] border-secondary-text xl:rounded-xl xl:mx-auto py-3 xl:px-6 px-4 backdrop-blur w-full xl:w-fit z-50"
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      aria-label="Header"
    >
      <nav
        className="flex justify-between items-center w-full h-full"
        aria-label="Main navigation"
      >
        <ul className="flex justify-between xl:justify-center w-full items-center gap-2">
          <li>
            <Logo />
          </li>
          <div className="hidden justify-center items-center xl:flex gap-2">
            {navItems.map((item, index) => (
              <motion.li key={item.name} variants={itemVariants} custom={index}>
                <Link
                  to={`/?scrollTo=${item.href}`}
                  className="text-primaryDarkBlack dark:text-primaryLightWhite text-sm hover:bg-gray-200 dark:hover:bg-dark-gray duration-300 py-1 px-3 rounded-lg cursor-pointer"
                >
                  {t(`nav.${item.name}`)}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={itemVariants} custom={navItems.length}>
              <Button type="link" to="/meeting-booking">
                {t('buttons.bookACall')}
              </Button>
            </motion.li>
            <motion.li variants={itemVariants} custom={navItems.length + 1}>
              <ToggleDark />
            </motion.li>
            <motion.li variants={itemVariants} custom={navItems.length + 2}>
              <ToggleLang />
            </motion.li>
          </div>
          <HumMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </ul>
      </nav>

      <motion.div
        className={`xl:hidden ${
          isMenuOpen ? 'static' : 'absolute'
        } mt-2 py-4 px-6 rounded-b-site origin-top`}
        style={{
          WebkitBackdropFilter: 'blur(8px)',
          backdropFilter: 'blur(8px)',
        }}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              variants={itemVariants}
              custom={index}
              className="py-1 px-3 rounded-lg"
            >
              <Link
                to={`/?scrollTo=${item.href}`}
                className="cursor-pointer"
                onClick={toggleMenu}
              >
                {t(`nav.${item.name}`)}
              </Link>
            </motion.li>
          ))}
          <motion.li
            variants={itemVariants}
            custom={navItems.length}
            onClick={toggleMenu}
          >
            <Button type="link" className="w-full" to={'/meeting-booking'}>
              {t('buttons.bookACall')}
            </Button>
          </motion.li>
          <div className="flex gap-4 items-center w-full">
            <motion.li
              variants={itemVariants}
              custom={navItems.length + 1}
              onClick={toggleMenu}
            >
              <ToggleDark />
            </motion.li>
            <motion.li
              variants={itemVariants}
              custom={navItems.length + 2}
              onClick={toggleMenu}
            >
              <ToggleLang />
            </motion.li>
          </div>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
