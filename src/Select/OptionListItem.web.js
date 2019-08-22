import React from 'react';
import styled from 'styled-components';
import View from '../View';

const styles = {
  backgroundColor: (props) => {
    if (props.isActive) {
      return props.theme.color.translucent;
    }
    if (props.isSelected) {
      return props.theme.color.primaryLighter;
    }
    return '';
  },
};

const OptionListItem = styled(
  ({
    isActive,
    isSelected,
    ...props
  }) => <View {...props} />,
)`
  background-color: ${styles.backgroundColor};
  cursor: ${(props) => props.onClick ? 'pointer' : ''};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  opacity: ${(props) => props.disabled ? '0.5' : ''};
  padding: ${(props) => props.theme.px(2)};
`;

export default OptionListItem;
