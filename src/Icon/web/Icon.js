import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../../Flex/web';

const styles = {
  color(props) {
    if (props.color) {
      return props.theme.color[props.color];
    } else if (props.disabled) {
      return props.theme.color.greyLight;
    }
    return '';
  },
};

export const I = styled(
  ({
    color,
    name,
    right,
    hasChildren,
    ...props
  }) => <i {...props} />,
).attrs({
  className: (props) => props.className ? `material-icons ${props.className}` : 'material-icons',
  children: (props) => props.name,
})`
  color: ${styles.color};
  margin-left: ${(props) => props.hasChildren && props.right ? props.theme.px(1) : ''};
  margin-right: ${(props) => props.hasChildren ? props.theme.px(1) : ''};
  font-size: ${(props) => props.hasChildren ? 'inherit !important' : ''};
  cursor: ${(props) => props.onClick ? 'pointer' : ''};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  opacity: ${(props) => props.disabled ? '0.5' : ''};

  &:hover {
    background: ${(props) => props.onClick ? props.theme.color.translucent : ''};
  }
`;

const Icon = ({
  color,
  name,
  right,
  onClick,
  children,
  ...props
}) => (
  <Flex alignItems="center">
    {right ? children : null}
    <I
      color={color}
      name={name}
      right={right}
      onClick={onClick}
      hasChildren={!!children}
      {...props}
    />
    {!right ? children : null}
  </Flex>
);

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  right: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Icon.defaultProps = {
  name: 'fiber_manual_record',
  right: false,
  disabled: false,
};

export default Icon;
