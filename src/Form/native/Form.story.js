import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Space from '../../Space/native';
import TextInput from '../../TextInput/native';
import Form from '../native';

storiesOf('Form', module)
  .add('simple', () => (
    <Form
      validationSchema={
        Form.validation.object().shape({
          email: Form.validation.string().email(),
        })
      }
      render={() => (
        <Space margin={[2]}>
          <TextInput
            name="email"
            label="Email"
          />
        </Space>
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
        <Space margin={[2]}>
          <TextInput
            name="name"
            label="Name"
            leftIcon={
              <Space style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
        </Space>
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
        <Space margin={[2]}>
          <TextInput
            name="Name"
            label="Name"
            rightIcon={
              <Space style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
        </Space>
      )}
    />
  ));
