import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Divider, Text, Spacer, Card, Flex } from '../../../native';

storiesOf('Divider', module)
  .add('Horizontal', () => (
    <Spacer margin={[2]}>
      <Card color="translucent">
        <Spacer padding={[2]}>
          <Text>Lorem Ipsum</Text>
        </Spacer>
      </Card>
      <Divider />
      <Card color="translucent">
        <Spacer padding={[2]}>
          <Text>Treebo Ipsum</Text>
        </Spacer>
      </Card>
    </Spacer>
  ))
  .add('Vertical', () => (
    <Spacer margin={[2]}>
      <Flex flexDirection="row">
        <Card color="translucent">
          <Spacer padding={[2]}>
            <Text>Lorem Ipsum</Text>
          </Spacer>
        </Card>
        <Divider vertical />
        <Card color="translucent">
          <Spacer padding={[2]}>
            <Text>Treebo Ipsum</Text>
          </Spacer>
        </Card>
      </Flex>
    </Spacer>
  ));
