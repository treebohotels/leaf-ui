import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Aux from '../Aux';
import Flex from '../Flex';
import Text from '../Text';
import Button from '../Button';
import Icon from '../Icon';
import Spacer from '../Spacer';

const NotificationContainer = styled.div`
  background: ${(p) => p.type ? p.theme.color[`${p.type}Lighter`] : ''};
  border-top: 2px solid ${(p) => p.type ? p.theme.color[p.type] : ''};
`;

const icon = {
  info: <Icon name="info" color="info" />,
  success: <Icon name="check_circle" color="success" />,
  warning: <Icon name="error" color="warning" />,
  danger: <Icon name="cancel" color="danger" />,
};

const Notification = ({
  type,
  title,
  content,
  actionProps,
}) => (
  <Spacer padding={1} margin={[0, 0, 2, 0]}>
    <NotificationContainer type={type}>
      <Spacer padding={2}>
        <Flex justifyContent="space-around" alignItems="center">
          <Flex flex="0">
            {icon[type]}
          </Flex>
          <Spacer margin={[0, 24, 0, 3]}>
            <Flex flex="1" flexDirection="column">
              {
                title ? (
                  <Aux>
                    <Spacer margin={[0, 0, 1, 0]}>
                      <Text size="m" weight="semibold">{title}</Text>
                    </Spacer>
                    <Text size="xs" color="slate">{content}</Text>
                  </Aux>
                ) : (
                  <Text>{content}</Text>
                )
              }
            </Flex>
          </Spacer>
          {
            actionProps ? (
              <Button
                color={type}
                size="small"
                {...actionProps}
              />
            ) : null
          }
        </Flex>
      </Spacer>
    </NotificationContainer>
  </Spacer>
);

Notification.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  actionProps: PropTypes.object,
};

Notification.defaultProps = {
  type: 'info',
};

export default Notification;