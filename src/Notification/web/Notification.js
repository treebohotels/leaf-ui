import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../Flex/web';
import Text from '../../Text/web';
import Button from '../../Button/web';
import Space from '../../Space/web';
import View from '../../View/web';
import NotificationContainer from './NotificationContainer';
import notificationTypes from './notificationTypes';

const Notification = ({
  type,
  title,
  content,
  actionProps,
}) => (
  <Space padding={[1]} margin={[0, 0, 2, 0]}>
    <NotificationContainer type={type}>
      <Space padding={[2]}>
        <Flex
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <View>
            <Flex flex="0">
              <View>
                {notificationTypes[type].icon}
              </View>
            </Flex>
            <Space margin={[0, 24, 0, 3]}>
              <Flex flex="1">
                <View>
                  {
                    title ? (
                      <View>
                        <Space margin={[0, 0, 1, 0]}>
                          <Text size="m" weight="semibold">{title}</Text>
                        </Space>
                        <Text size="xs" color="greyDark">{content}</Text>
                      </View>
                    ) : (
                      <Text>{content}</Text>
                    )
                  }
                </View>
              </Flex>
            </Space>
            {
              actionProps ? (
                <Button
                  color={notificationTypes[type].color}
                  size="small"
                  {...actionProps}
                />
              ) : null
            }
          </View>
        </Flex>
      </Space>
    </NotificationContainer>
  </Space>
);

Notification.propTypes = {
  type: PropTypes.oneOf(Object.keys(notificationTypes)),
  title: PropTypes.string,
  content: PropTypes.string,
  actionProps: PropTypes.object,
};

Notification.defaultProps = {
  type: 'info',
};

export default Notification;
