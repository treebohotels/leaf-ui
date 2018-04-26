import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Form, TextInput, Spacer } from '../../../native';

storiesOf('Form', module)
  .add('simple', () => (
    <Form
      validationSchema={
        Form.validation.object().shape({
          email: Form.validation.string().email(),
        })
      }
      render={() => (
        <Spacer margin={[2]}>
          <TextInput
            name="email"
            label="Email"
          />
        </Spacer>
      )}
    />
  ))
  .add('left icon', () => (
    <Form
      initialValues={{
        name: 'Leaf',
      }}
      validationSchema={
        Form.validation.object().shape({
          name: Form.validation.string().required(),
        })
      }
      render={() => (
        <Spacer margin={[2]}>
          <TextInput
            name="name"
            label="Name"
            leftIcon={
              <Spacer style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
        </Spacer>
      )}
    />
  ))
  .add('right icon', () => (
    <Form
      initialValues={{
        name: 'Leaf',
      }}
      validationSchema={
        Form.validation.object().shape({
          name: Form.validation.string().required(),
        })
      }
      render={() => (
        <Spacer margin={[2]}>
          <TextInput
            name="Name"
            label="Name"
            rightIcon={
              <Spacer style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
        </Spacer>
      )}
    />
  ));
