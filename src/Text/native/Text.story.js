import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Spacer from '../../Spacer/native';
import Card from '../../Card/native';
import theme from '../../theme';
import Text from '../native';

storiesOf('Text', module)
  .add('sizes', () => (
    <Spacer margin={[2]}>
      <Card elevation={1}>
        {
          Object.keys(theme.fontSize).map((size) => (
            <Spacer padding={[1]} key={size}>
              <Text size={size}>
                {`size="${size}" (${theme.fontSize[size]})`}
              </Text>
            </Spacer>
          ))
        }
      </Card>
    </Spacer>
  ))
  .add('weights', () => (
    <Spacer margin={[2]}>
      <Card elevation={1}>
        {
          Object.keys(theme.fontWeight).map((weight) => (
            <Spacer padding={[1]} key={weight}>
              <Text weight={weight}>
                {`weight="${weight}" (${theme.fontWeight[weight]})`}
              </Text>
            </Spacer>
          ))
        }
      </Card>
    </Spacer>
  ));
