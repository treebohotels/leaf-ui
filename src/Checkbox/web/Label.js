import styled from 'styled-components';

const Label = styled.label`
  cursor: pointer;
  overflow: ${(props) => props.truncate ? 'hidden' : ''};
  white-space: ${(props) => props.truncate ? 'nowrap' : ''};
  text-overflow: ${(props) => props.truncate ? 'ellipsis' : ''};
`;

export default Label;
