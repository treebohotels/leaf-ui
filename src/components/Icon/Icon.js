import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../Flex';

const I = styled.i.attrs({
  className: (p) => p.className ? `material-icons ${p.className}` : 'material-icons',
  children: (p) => p.name,
})`
  ${(p) => p.color ? `color: ${p.theme.color[p.color]};` : ''}
  ${(p) => p.hasChildren ? `
    ${p.right ? `margin-left: ${p.theme.px(1)}` : `margin-right: ${p.theme.px(1)}`};
    line-height: 0 !important;
  ` : ''}
`;

const Icon = ({ children, ...props }) => (
  <Flex alignItems="center" {...props}>
    {props.right ? children : null}
    <I hasChildren={!!children} {...props} />
    {!props.right ? children : null}
  </Flex>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  right: PropTypes.bool,
  children: PropTypes.node,
};

Icon.defaultProps = {
  name: 'fiber_manual_record',
};

export default Icon;
