import PropTypes from 'prop-types';

const formatPrice = (currency, rounded) => {
  const [amount, code] = currency.split(' ');
  const price = +amount;
  const currencyPrice = price.toLocaleString('en-IN', {
    style: 'currency',
    currency: code,
    minimumFractionDigits: rounded ? 0 : 2,
    maximumFractionDigits: rounded ? 0 : 2,
  });
  return currencyPrice;
};

const Price = ({ rounded, children }) =>
  children ? formatPrice(children, rounded) : null;

Price.propTypes = {
  rounded: PropTypes.bool,
  children: PropTypes.node,
};

export default Price;
