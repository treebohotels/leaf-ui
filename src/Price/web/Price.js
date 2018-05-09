import PropTypes from 'prop-types';
import formatPrice from './formatPrice';

const Price = ({ rounded, children }) =>
  formatPrice(children, rounded);

Price.propTypes = {
  rounded: PropTypes.bool,
  children: PropTypes.node,
};

Price.defaultProps = {
  rounded: true,
};

export default Price;
