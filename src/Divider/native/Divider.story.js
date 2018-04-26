import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Spacer from '../../Spacer/native';
import Text from '../../Text/native';
import Card from '../../Card/native';
import Flex from '../../Flex/native';
import Divider from '../native';

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
