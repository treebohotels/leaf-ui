import PropTypes from 'prop-types';

const Price = ({ rounded, children }) => {
  const unformattedPrice = +children;
  const isNegative = unformattedPrice < 0;
  const positivePrice = Math.abs(unformattedPrice);
  const formattedPrice = (rounded ? Math.round(positivePrice) : positivePrice).toLocaleString('en-IN');
  const rupeeSymbol = isNegative ? '- ₹' : '₹';
  const inrPrice = `${rupeeSymbol} ${formattedPrice}`;
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
