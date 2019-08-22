import React from 'react';
import styled from 'styled-components';

const Tick = styled(
  ({
    className,
  }) => (
    <svg
      className={className}
      fillRule="evenodd"
      viewBox="0 0 12 9"
    >
      <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z" />
    </svg>
  ),
)`
  fill: ${(props) => props.theme.color.white};
  width: 100%;
  height: 100%;
  padding: 0 1px;
  display: none;
`;

export default Tick;
