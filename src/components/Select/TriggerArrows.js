import React from 'react';
import styled from 'styled-components';

const TriggerArrows = styled(({
  className,
}) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
  >
    <path fillRule="evenodd" d="M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z" />
  </svg>
))`
  flex: none;
  width: ${(props) => props.theme.px(3)};
  height: ${(props) => props.theme.px(3)};
`;

export default TriggerArrows;
