import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import FAQItem from '../components/FAQItem';
import { useTranslation } from 'react-i18next';

const FrequentlySection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: 'one',
      answer: 'one',
    },
    {
      question: 'two',
      answer: 'two',
    },
    {
      question: 'three',
      answer: 'three',
    },
    {
      question: 'four',
      answer: 'four',
    },
    {
      question: 'five',
      answer: 'five',
    },
    {
      question: 'six',
      answer: 'six',
    },
    {
      question: 'seven',
      answer: 'seven',
    },
    {
      question: 'eight',
      answer: 'eight',
    },
    {
      question: 'nine',
      answer: 'nine',
    },
    {
      question: 'ten',
      answer: 'ten',
    },
    {
      question: 'eleven',
      answer: 'eleven',
    },
  ];

  return (
    <Section id="FAQs">
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle className="text-center">{t('faq.title')}</LittleTitle>
        <Title>{t('faq.header')}</Title>
        <Description className="text-center mb-6">
          {t('faq.description')}
        </Description>
      </Container>
      <Container className="mt-16">
        <div className="max-w-2xl flex flex-col items-center justify-center mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              terms={index === 2}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FrequentlySection;
