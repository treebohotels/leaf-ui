export default (value, text, prependValue = false, suffix = 's') => {
  const word = +value > 1 ? `${text}${suffix}` : text;
  return prependValue ? `${value} ${word}` : word;
};
