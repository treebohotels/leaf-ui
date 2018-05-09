const formatPrice = (value, rounded = true) => {
  const price = +value;
  const inrPrice = price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: rounded ? 0 : 2,
    maximumFractionDigits: rounded ? 0 : 2,
  });
  return inrPrice;
};

export default formatPrice;
