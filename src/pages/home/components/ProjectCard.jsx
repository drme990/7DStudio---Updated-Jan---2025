import PropTypes from 'prop-types';

const ProjectCard = ({ img, title }) => {
  return (
    <div className="w-64 md:w-96" aria-label="Project card">
      <img
        src={img}
        alt={`${title} project`}
        className="w-64 md:w-96 object-contain"
        loading="lazy"
      />
    </div>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;
