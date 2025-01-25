import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

const MyContainer = ({ children, className }) => {
  return (
    <div className={cn('min-w-0 max-w-6xl my-0 mx-auto', className)}>
      {children}
    </div>
  );
};

MyContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default MyContainer;
