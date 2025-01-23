import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const ProcessCard = ({ title, description, icon, className }) => {
  return (
    <div
      className={cn(
        'w-72 flex flex-col items-center gap-2 bg-secondaryLightWhite dark:bg-secondaryDarkBlack rounded-site border-[1px] border-secondary-text py-2 px-4',
        className
      )}
    >
      <figure className="w-1/3 no-drag-img">
        <img src={icon} alt={title} />
      </figure>
      <div>
        <h4 className="text-center">{title}</h4>
        <p className="text-center text-light-text dark:text-primary-text">
          {description}
        </p>
      </div>
    </div>
  );
};

ProcessCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
};

export default ProcessCard;
