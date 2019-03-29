import styled from 'styled-components';
import TH from './TH';
import TR from './TR';

const THead = styled.thead`
  ${/* sc-selector */TH} {
    ${(props) => props.sticky ? `
      background-color: ${props.theme.color.white};
      box-shadow: 0px 1px ${props.theme.color.greyLight};
      position: sticky;
      top: 0;
    ` : ''}
  }

  ${/* sc-selector */TR} {
    &:hover {
      background-color: initial;
    }
  }
`;

export default THead;
