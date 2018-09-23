import React from 'react';
import styled from 'styled-components';

const OptionList = styled(
  ({
    block,
    ...props
  }) => <ul {...props} />,
)`
  position: absolute;
  top: -42px;
  left: 0;
  overflow-y: scroll;
  z-index: 1050;
  margin: 0;
  padding: 0;
  width: ${(props) => props.block ? '100%' : ''};
  background: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export default OptionList;
