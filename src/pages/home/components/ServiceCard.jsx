import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const ServiceCard = ({ img, icon, title, className }) => {
  return (
    <div
      className={cn(
        'min-w-fit mx-2 h-16 flex gap-3 text-2xl items-center justify-center rounded-site p-6 bg-secondaryLightWhite dark:bg-secondaryDarkBlack text-primaryDarkBlack dark:text-primaryLightWhite border-[1px] border-light-border dark:border-secondary-text',
        className
      )}
    >
      {img && (
        <figure className="w-4">
          <img src={img} alt={title} className="fill-white" />
        </figure>
      )}
      {icon && <span>{icon}</span>}
      <h3>{title}</h3>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node,
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ServiceCard;
