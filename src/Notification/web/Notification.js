import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../Flex/web';
import Text from '../../Text/web';
import Card from '../../Card/web';
import Button from '../../Button/web';
import Space from '../../Space/web';
import View from '../../View/web';
import Icon from '../../Icon/web';
import theme from '../../theme';

const Notification = ({
  color,
  icon,
  title,
  message,
  actions,
  onClose,
}) => (
  <Space padding={[1]}>
    <Card
      borderColor={color}
      backgroundColor={`${color}Lighter`}
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <View>
          {
            icon ? (
              <Space margin={[0, 1, 0, 0]}>
                <Flex flex="none">
                  <Icon name={icon} color={color} />
                </Flex>
              </Space>
            ) : null
          }
          <Flex flex="1">
            <View>
              {
                title ? (
                  <Space margin={[0, 0, message ? 0.5 : 0, 0]}>
                    <Text size="m">{title}</Text>
                  </Space>
                ) : null
              }
              {
                message ? (
                  <Text size="xs" color="greyDark">{message}</Text>
                ) : null
              }
            </View>
          </Flex>
          {
            actions.map((action) => (
              <Space
                key={action.label}
                margin={[0, 0, 0, 1]}
              >
                <Button
                  color={color}
                  size="small"
                  {...action}
                >
                  {action.label}
                </Button>
              </Space>
            ))
          }
          {
            onClose ? (
              <Space margin={[0, 0, 0, 1]}>
                <Icon
                  name="close"
                  onClick={onClose}
                />
              </Space>
            ) : null
          }
        </View>
      </Flex>
    </Card>
  </Space>
);

Notification.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)).isRequired,
  icon: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  })),
  onClose: PropTypes.func,
};

Notification.defaultProps = {
  actions: [],
};

export default Notification;
