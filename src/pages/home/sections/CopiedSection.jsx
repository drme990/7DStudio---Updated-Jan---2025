import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Section } from '../../../components/Section';
import MyContainer from '../../../components/MyContainer';
import drMohamed from '../../../assets/drMohamed.webp';

const CopiedSection = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

  return (
    <Section id="copied">
      <MyContainer className="flex items-center justify-center">
        <article
          className="w-full z-10 relative bg-secondaryLightWhite dark:bg-secondaryDarkBlack max-w-lg flex justify-between flex-row rounded-site border border-light-border dark:border-secondary-text"
          aria-labelledby="copied-title"
        >
          <figure
            className={`relative w-1/3 md:w-1/4 aspect-square ${
              lang === 'ar' ? 'border-l' : 'border-r'
            }  border-secondary-text`}
          >
            <img
              src={drMohamed}
              alt="Portrait of Dr. Mohamed Esam, the founder of Seven Design Studio"
              className={`absolute inset-0 w-full h-full object-cover ${
                lang === 'ar' ? 'rounded-r-site' : 'rounded-l-site'
              } select-none no-drag-img`}
            />
            <figcaption className="sr-only">
              Dr. Mohamed Esam, the founder of Seven Design Studio
            </figcaption>
          </figure>
          <div className="flex-1 flex flex-col justify-center text-light-text dark:text-primary-text">
            <blockquote
              id="copied-title"
              className="border-b py-2 px-3 border-secondary-text text-base md:text-lg text-center"
              aria-label={t('copied.quote')}
            >
              {t('copied.quote')}.
            </blockquote>
            <h2 className="text-center p-1 py-2 text-base md:text-lg">
              {t('copied.by')}
            </h2>
          </div>
        </article>
      </MyContainer>
    </Section>
  );
};

export default CopiedSection;
