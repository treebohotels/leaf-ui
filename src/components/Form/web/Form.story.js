import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from '../Form';
import TextInput from '../../TextInput/web';
import Select from '../../Select/web';
import Checkbox from '../../Checkbox/web';
import RadioButton from '../../RadioButton/web';
import Button from '../../Button/web';

storiesOf('Form', module)
  .add('simple', () => (
    <Form
      initialValues={{
        leafName: 'eucalyptus',
        leafColor: { label: 'Green', value: 'Green' },
        isAquatic: false,
        treeType: 'maple',
      }}
      onSubmit={action('onSubmit')}
      validationSchema={
        Form.validation.object().shape({
          leafName: Form.validation.string().required(),
          leafColor: Form.validation.object().required(),
          isAquatic: Form.validation.boolean().equals([true]),
          treeType: Form.validation.string().required(),
        })
      }
    >
      <Form.Form>
        <TextInput name="leafName" label="Leaf name" />
        <Select name="leafColor" label="Leaf color" options={[{ label: 'Red', value: 'Red' }, { label: 'Green', value: 'Green' }]} />
        <Checkbox name="isAquatic" label="Is an aquatic plant" />
        <RadioButton name="treeType" label="Oak" value="oak" />
        <RadioButton name="treeType" label="Maple" value="maple" />
        <RadioButton name="treeType" label="Mahogany" value="mahogany" />
        <Button type="submit">Submit</Button>
      </Form.Form>
    </Form>
  ));
