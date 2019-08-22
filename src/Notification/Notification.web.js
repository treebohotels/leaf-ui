import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';
import Text from '../Text';
import Card from '../Card';
import Button from '../Button';
import Space from '../Space';
import View from '../View';
import Icon from '../Icon';
import theme from '../theme';

const Notification = ({
  className,
  color,
  icon,
  title,
  message,
  actions,
  onClose,
}) => (
  <Space
    className={className}
    padding={[1]}
  >
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
          <Flex flex="auto">
            <View>
              {
                title ? (
                  <Space margin={[0, 0, message ? 0.5 : 0, 0]}>
                    <Text size="m">
                      {title}
                    </Text>
                  </Space>
                ) : null
              }
              {
                message ? (
                  <Text size="xs" color="greyDark">
                    {message}
                  </Text>
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
  className: PropTypes.string,
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
