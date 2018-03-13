import Flex from '../Flex';

const Trigger = Flex.extend`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.block ? '100%' : props.theme.px(20)};
  padding: ${(props) => props.theme.px(1)};
  border: 1px solid ${(props) => props.theme.color.greyDark};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default Trigger;
