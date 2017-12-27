import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from '../../src/components/Button/native';
import Text from '../../src/components/Text/native';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>
      <Text>Default Button</Text>
    </Button>
  ));
