import React from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.greyLight};
`;

const TriggerArrows = () => (
  <ArrowContainer>
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <g id="arrow-filled-down" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon id="Shape" fill="#4A4A4A" fillRule="nonzero" points="12 15 8 9 16 9" />
      </g>
    </svg>
  </ArrowContainer>
);

export default TriggerArrows;
