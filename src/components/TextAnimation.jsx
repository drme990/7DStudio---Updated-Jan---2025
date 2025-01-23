import { motion } from 'motion/react';
import i18next from 'i18next';

const TextAnimation = () => {
  const lang = i18next.language;

  const textVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const containerVariantTest = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Define header and text content for EN and AR
  const enHeader = ['From', 'Simple', 'Concept', 'to', 'Iconic', 'Brand'];
  const enText = [
    'At',
    'Seven',
    'Design',
    'Studio',
    'we',
    'transform',
    'ideas',
    'into',
    'powerful',
    'visual',
    'identities',
    'that',
    'elevate',
    'your',
    'brand.',
    'A',
    'logo',
    'and',
    'brand',
    'identity',
    'aren’t',
    'just',
    'shapes—they’re',
    'lasting',
    'imprints',
    'with',
    'no',
    'limits.',
  ];

  const arHeader = [
    'مـن',
    'فكـرة',
    'بَسِيطـــة',
    'جـدا',
    'إلـى',
    'برانـد',
    'كَبِيـــر',
    'جـدا',
  ];

  const arText = [
    'فـي',
    'Seven',
    'Design',
    'Studio',
    'نحـــــــــــــــــــــــــول',
    'طموحك',
    'وأحلامك',
    'إلى',
    'برانــــد',
    'استثنائي',
    'يلفت',
    'الأنظــار',
    'نرســم',
    'لـه',
    'شخصيـة',
    'ونخلــق',
    'له',
    'صوتــــاً',
    'لنســـاعدك',
    'في',
    'تحقيــــق',
    'المبيعــــات',
    'المرجـــوة',
    'الشعــــار',
    'والهويــة',
    'ليست',
    'مجرد',
    'أشكال—لكنها',
    'بصمـــــات',
    'خالــــــــدة',
    'تـــروي',
    'قصــص',
    'لا',
    'تُنســــى',
  ];

  const isArabic = lang === 'ar'; // Check if the current language is Arabic
  const header = isArabic ? arHeader : enHeader;
  const text = isArabic ? arText : enText;

  return (
    <div className="flex flex-col items-center gap-[19.5px] text-gap">
      <motion.h1
        className={`text-site md:text-site-md text-center ${
          lang === 'ar' ? 'leading-site-arabic' : 'tracking-site leading-site'
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="From Simple Concept to Iconic Brand"
      >
        {header.map((word, index) => (
          <motion.span
            key={index}
            className={
              index === 4 && !isArabic
                ? 'font-Instrument font-normal italic text-[36px] md:text-[58px]'
                : ''
            }
            variants={textVariants}
            aria-label={word}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className={`text-center text-[17px] md:text-[20px] text-light-text dark:text-primary-text lg:max-w-2xl px-6 text md:px-20 lg:px-0 ${
          lang === 'ar' ? ' leading-siteMd-arabic' : 'leading-siteMd'
        }`}
        variants={containerVariantTest}
        initial="hidden"
        animate="visible"
        aria-label="At Seven Design Studio we transform ideas into powerful visual identities that elevate your brand. A logo and brand identity aren’t just shapes—they’re lasting imprints with no limits."
      >
        {text.map((word, index) => (
          <motion.span key={index} variants={textVariants} aria-label={word}>
            {word}{' '}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TextAnimation;
