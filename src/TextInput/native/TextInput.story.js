import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Spacer from '../../Spacer/native';
import TextInput from '../native';

storiesOf('TextInput', module)
  .add('simple', () => (
    <Spacer margin={[2]}>
      <TextInput
        name="name"
        label="Name"
        error="required"
      />
    </Spacer>
  )).add('placeholder', () => (
    <Spacer margin={[2]}>
      <TextInput
        name="name"
        label="Name"
        error="required"
        showPlaceholder
      />
    </Spacer>
  ));
