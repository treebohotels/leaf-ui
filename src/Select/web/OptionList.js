import React from 'react';
import styled from 'styled-components';
import List from '../../List/web';

const OptionList = styled(
  ({
    block,
    ...props
  }) => <List {...props} />,
)`
  position: absolute;
  top: -42px;
  left: 0;
  overflow-y: scroll;
  z-index: 1050;
  width: ${(props) => props.block ? '100%' : ''};
  background: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export default OptionList;
