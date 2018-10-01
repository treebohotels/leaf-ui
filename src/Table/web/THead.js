import styled from 'styled-components';
import TR from './TR';

const THead = styled.thead`
  ${/* sc-selector */TR} {
    &:hover {
      background-color: initial;
    }
  }
`;

export default THead;
