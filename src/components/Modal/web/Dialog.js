import Card from '../../Card/web';

const Dialog = Card.extend`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: ${(props) => props.theme.px(85)};
  min-height: ${(props) => props.theme.px(60)};
  box-shadow: ${(props) => props.theme.boxShadow[3]};
`;

export default Dialog;
