import { useTranslation } from 'react-i18next';
import {
  Description,
  LatinSpan,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import Container from '../../../components/container';
import MovingSlider from '../../../components/MovingSlider';
import TestimonialCard from '../components/TestimonialCard';
import { myTestimonialsOne } from '../../../services/myTestimonials';
import { myTestimonialsTwo } from '../../../services/myTestimonials';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="testimonials">
      <Container className="flex flex-col gap-[19.5px] text-gap mb-12">
        <LittleTitle>{t('testimonials.wordsOfLove')}</LittleTitle>
        <Title>
          {t('testimonials.readWhat')}{' '}
          <LatinSpan>{t('testimonials.ourClients')}</LatinSpan>{' '}
          {t('testimonials.say')}
        </Title>
        <Description>{t('testimonials.description')}</Description>
      </Container>
      <Container className="mt-16 flex flex-col gap-4">
        <MovingSlider speed={210} arrayNumber={7}>
          {myTestimonialsOne.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={t(testimonial.title)}
              testimonial={t(testimonial.testimonial)}
              name={t(testimonial.name)}
              image={testimonial.image}
            />
          ))}
        </MovingSlider>
        <MovingSlider speed={210} arrayNumber={7} direction={'reverse'}>
          {myTestimonialsTwo.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={t(testimonial.title)}
              testimonial={t(testimonial.testimonial)}
              name={t(testimonial.name)}
              image={testimonial.image}
            />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
