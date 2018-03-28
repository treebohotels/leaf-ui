import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Text, { fontFamilies } from '../../Text';

const fontSize = {
  xs: 12,
  s: 14,
  m: 16,
  l: 20,
  xl: 28,
  xxl: 44,
};

const types = {
  regular: 'none',
  striked: 'line-through',
};

const Amount = styled.Text`
  ${(props) => props.size ? `font-size: ${fontSize[props.size]};` : ''}
  ${(props) => props.color ? `color: ${props.theme.color[props.color]};` : ''}
  ${(props) => props.bold ? `font-weight: ${props.theme.fontWeight.bold};` : `font-weight: ${props.theme.fontWeight.medium}`}
  ${(props) => props.size ? `text-decoration-line: ${types[props.type]};` : ''}
  ${(props) => props.size ? `font-family: ${fontFamilies.medium};` : ''}
  ${'margin-right: 6;'};
`;

const Price = ({
  price,
  type,
  roundUpTo,
  size,
  bold,
  color: pColor,
  negative,
  previewStyle,
  showSign,
  testID,
  accessibilityLabel,
}) => {
  if (price === undefined) {
    return (<Text size="s" preview={previewStyle}>&#x20b9;</Text>);
  }
  const positiveSign = showSign ? '+' : null;

  return (
    <Amount
      bold={bold}
      color={pColor}
      size={size}
      type={type}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      { negative ? '-' : positiveSign} &#x20b9;{price.toFixed(roundUpTo).toLocaleString('en-IN')}
    </Amount>
  );
};

Price.propTypes = {
  price: PropTypes.number,
  bold: PropTypes.bool,
  negative: PropTypes.bool,
  color: PropTypes.oneOf(['greyDarker', 'greyDark', 'grey', 'green', 'white', 'redDark']),
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  type: PropTypes.oneOf(['regular', 'striked']),
  previewStyle: PropTypes.bool,
  showSign: PropTypes.bool,
  roundUpTo: PropTypes.number,
  testID: PropTypes.string,
  accessibilityLabel: PropTypes.string,
};

Price.defaultProps = {
  size: 'm',
  type: 'regular',
  color: 'greyDarker',
  bold: false,
  negative: false,
  showSign: false,
  roundUpTo: 0,
  testID: 'price-text',
  accessibilityLabel: 'price-text',
};

export default Price;
