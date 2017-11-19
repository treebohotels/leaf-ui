import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from './Form';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';

storiesOf('Form', module)
  .add('simple', () => (
    <Form
      initialValues={{
        leafColor: 'green',
        isWoodBrown: false,
      }}
      onSubmit={action('onSubmit')}
      validationSchema={
        Form.validation.object().shape({
          leafColor: Form.validation.string().required(),
          isWoodBrown: Form.validation.boolean().equals([true]),
        })
      }
    >
      <Form.Form>
        <TextInput name="leafColor" label="Leaf Color" />
        <Checkbox name="isWoodBrown" label="Is wood brown?" />
        <input type="submit" />
      </Form.Form>
    </Form>
  ));
