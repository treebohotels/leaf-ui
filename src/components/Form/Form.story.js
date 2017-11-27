import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from './Form';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';

storiesOf('Form', module)
  .add('simple', () => (
    <Form
      initialValues={{
        leafColor: 'green',
        isWoodBrown: false,
        treeType: 'maple',
      }}
      onSubmit={action('onSubmit')}
      validationSchema={
        Form.validation.object().shape({
          leafColor: Form.validation.string().required(),
          isWoodBrown: Form.validation.boolean().equals([true]),
          treeType: Form.validation.string().required(),
        })
      }
    >
      <Form.Form>
        <TextInput name="leafColor" label="Leaf Color" />
        <Checkbox name="isWoodBrown" label="Is wood brown?" />
        <RadioButton name="treeType" label="Oak" value="oak" />
        <RadioButton name="treeType" label="Maple" value="maple" />
        <RadioButton name="treeType" label="Mahogany" value="mahogany" />
        <input type="submit" />
      </Form.Form>
    </Form>
  ));
