import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Card, Text, Spacer } from '../../../native';

storiesOf('Card', module)
  .add('Lagoon', () => (
    <Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={0}>
          <Spacer padding={[2]}>
            <Text color="white">Elevation: 0</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={1}>
          <Spacer padding={[2]}>
            <Text color="white">Elevation: 1</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={2}>
          <Spacer padding={[2]}>
            <Text color="white">Elevation: 2</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={3}>
          <Spacer padding={[2]}>
            <Text color="white">Elevation: 3</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={4}>
          <Spacer padding={[2]}>
            <Text color="white">Elevation: 4</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={5}>
          <Spacer padding={[2]}>
            <Text color="white">Elevation: 5</Text>
          </Spacer>
        </Card>
      </Spacer>
    </Spacer>
  ));
