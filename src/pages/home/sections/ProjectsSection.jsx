import Container from '../../../components/container';
import {
  Description,
  LatinSpan,
  Section,
  Title,
} from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import { myProjects } from '../../../services/myProjects';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <Section id={'our-projects'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <Title>
          {t('home.recentProjectsSection.title')}{' '}
          <LatinSpan>{t('home.recentProjectsSection.latin')}</LatinSpan>{' '}
        </Title>
        <Description>{t('home.recentProjectsSection.description')}</Description>
      </Container>
      <Container className="flex flex-col py-4 gap-6 mt-16">
        <MovingSlider speed={200} arrayNumber={8} innerClassName="flex gap-4">
          {myProjects.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} img={project.img} title={project.title} />
          ))}
        </MovingSlider>
        <MovingSlider
          speed={200}
          arrayNumber={8}
          direction={'reverse'}
          innerClassName="flex gap-4"
        >
          {myProjects.slice(4, 8).map((project, index) => (
            <ProjectCard key={index} img={project.img} title={project.title} />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
