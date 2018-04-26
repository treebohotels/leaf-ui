import List from '../../List/web';

const OptionList = List.extend`
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  z-index: 1050;
  background: ${(props) => props.theme.color.white};
  min-width: ${(props) => props.block ? '100%' : props.theme.px(25)};
  max-height: ${(props) => props.theme.px(25)};
  border: 1px solid ${(props) => props.theme.color.greyLight};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow[2]};
`;

export default OptionList;
