import List from '../../List/web';

const OptionList = List.extend`
  position: absolute;
  top: -1px;
  left: 0;
  overflow-y: scroll;
  z-index: 1050;
  background: ${(props) => props.theme.color.white};
  min-width: ${(props) => props.block ? '100%' : props.theme.px(25)};
  max-height: ${(props) => props.theme.px(25)};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.color.primary};
  border-top-color: ${(props) => props.theme.color.greyLight};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow[1]};
`;

export default OptionList;
