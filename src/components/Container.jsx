import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

const Container = ({ children, className }) => {
  return (
    <div className={cn('min-w-0 max-w-6xl my-0 mx-auto', className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
