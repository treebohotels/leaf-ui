import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text, Spacer, Card, theme } from '../../../native';

storiesOf('Text', module)
  .add('sizes', () => (
    <Spacer margin={[2]}>
      <Card elevation={1}>
        { Object.keys(theme.fontSize).map((size) => (
          <Spacer padding={[1]} key={size}>
            <Text size={size}>
              {`size="${size}" (${theme.fontSize[size]})`}
            </Text>
          </Spacer>
          )) }
      </Card>
    </Spacer>
  ))
  .add('weights', () => (
    <Spacer margin={[2]}>
      <Card elevation={1}>
        { Object.keys(theme.fontWeight).map((weight) => (
          <Spacer padding={[1]} key={weight}>
            <Text weight={weight}>
              {`weight="${weight}" (${theme.fontWeight[weight]})`}
            </Text>
          </Spacer>
          )) }
      </Card>
    </Spacer>
  ));
