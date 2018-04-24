import PropTypes from 'prop-types';

const Price = ({ rounded, children }) => {
  const price = +children;
  const inrPrice = price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: rounded ? 0 : 2,
    maximumFractionDigits: rounded ? 0 : 2,
  });
  return inrPrice;
};

Price.propTypes = {
  rounded: PropTypes.bool,
  children: PropTypes.node,
};

Price.defaultProps = {
  rounded: true,
};

export default Price;
