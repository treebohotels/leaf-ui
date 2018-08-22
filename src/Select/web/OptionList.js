import List from '../../List/web';

const OptionList = List.extend`
  position: absolute;
  top: -42px;
  left: 0;
  overflow-y: scroll;
  z-index: 1050;
  background: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export default OptionList;
