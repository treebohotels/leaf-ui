import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from './Form';
import TextInput from '../TextInput';

storiesOf('Form', module)
  .add('simple', () => (
    <Form
      initialValues={{
        leafColor: 'green',
        // agreedToTnC: false,
      }}
      onSubmit={action('onSubmit')}
      validationSchema={
        Form.validation.object().shape({
          leafColor: Form.validation.string().required(),
          // agreedToTnC: Form.validation.boolean().equals([true]),
        })
      }
    >
      <Form.Form>
        <TextInput name="leafColor" label="Leaf Color" />
        <input type="submit" />
      </Form.Form>
    </Form>
  ));
