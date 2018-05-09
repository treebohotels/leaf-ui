import React from 'react';
import { action } from '@storybook/addon-actions';

export default(storiesOf, {
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  Button,
  Form,
}) =>
  storiesOf('Form', module)
    .add('simple', () => (
      <Form
        initialValues={{
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
          <TextInput
            name="leafName"
            label="Leaf name"
            defaultValue="eucalyptus"
          />
          <Select
            name="leafColor"
            label="Leaf color"
            options={[{ label: 'Red', value: 'Red' }, { label: 'Green', value: 'Green' }]}
            defaultSelected={{ label: 'Green', value: 'Green' }}
          />
          <Checkbox
            name="isAquatic"
            label="Is an aquatic plant"
            defaultChecked
          />
          <RadioButton
            name="treeType"
            label="Oak"
            value="oak"
          />
          <RadioButton
            name="treeType"
            label="Maple"
            value="maple"
          />
          <RadioButton
            name="treeType"
            label="Mahogany"
            value="mahogany"
          />
          <Button type="submit">Submit</Button>
        </Form.Form>
      </Form>
    ));
