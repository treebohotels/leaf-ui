import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../Flex';

const I = styled.i.attrs({
  className: (p) => p.className ? `material-icons ${p.className}` : 'material-icons',
  children: (p) => p.name,
})`
  ${(p) => p.color ? `color: ${p.theme.color[p.color]};` : ''}
  ${(p) => p.button ? `
    padding: ${p.theme.px(1)};
    cursor: pointer;

    &:hover {
      background: ${p.theme.color.translucent};
    }

    ${p.disabled ? `
      color: ${p.theme.color.greyLight};
      pointer-events: none;
      opacity: 0.5;
    ` : ''}
  ` : ''}
  ${(p) => p.hasChildren ? `
    ${p.right ? `margin-left: ${p.theme.px(1)}` : `margin-right: ${p.theme.px(1)}`};
    font-size: inherit !important;
  ` : ''}
`;

const Icon = ({
  color,
  name,
  right,
  button,
  children,
  ...props
}) => (
  <Flex alignItems="center">
    {right ? children : null}
    <I
      color={color}
      name={name}
      right={right}
      button={button}
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
  button: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Icon.defaultProps = {
  name: 'fiber_manual_record',
  right: false,
  button: false,
  disabled: false,
};

export default Icon;
