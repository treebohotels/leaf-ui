import Flex from '../../Flex/web';

const Trigger = Flex.extend`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  width: ${(props) => props.block ? '100%' : props.theme.px(25)};
  padding: ${(props) => props.theme.px([3, 1.5, 1.5, 1.5])};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default Trigger;
