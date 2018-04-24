import styled from 'styled-components';
import notificationTypes from './notificationTypes';

const NotificationContainer = styled.div`
  background: ${(props) => props.type ? props.theme.color[`${notificationTypes[props.type].color}Lighter`] : ''};
  border-top: 2px solid ${(props) => props.type ? props.theme.color[notificationTypes[props.type].color] : ''};
`;

export default NotificationContainer;
