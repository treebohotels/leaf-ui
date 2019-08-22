import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import dateFnsAddDays from 'date-fns/add_days';
import Space from '../Space';
import TextInput from '../TextInput';
import Select from '../Select';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';
import DatePickerInput from '../DatePickerInput';
import DateRangePickerInput from '../DateRangePickerInput';
import Button from '../Button';
import View from '../View';
import Form from './Form';

storiesOf('Form', module).addParameters({
  component: Form,
})
  .add('simple', () => (
    <Form
      onSubmit={action('onSubmit')}
      validationSchema={
          Form.validation.object().shape({
            leafName: Form.validation.string().name().required(),
            leafDOB: Form.validation.string().required(),
            leafFrom: Form.validation.string().required(),
            leafTo: Form.validation.string().required(),
            leafColor: Form.validation.string().required(),
            isAquatic: Form.validation.boolean(),
            treeType: Form.validation.string().required(),
          })
        }
    >
      <Form.Form>
        <Space margin={[0, 0, 2, 0]}>
          <TextInput
            name="leafName"
            label="Leaf Name"
            placeholder="pine"
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <DatePickerInput
            name="leafDOB"
            label="Leaf DOB"
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <DateRangePickerInput
            name={{ from: 'leafFrom', to: 'leafTo' }}
            defaultValue={{ from: new Date(), to: dateFnsAddDays(new Date(), 1) }}
            label={{ from: 'From', to: 'To' }}
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <Select
            name="leafColor"
            label="Leaf color"
            multiple
            placeholder="Select a color"
            options={[{ label: 'Red', value: 'Red' }, { label: 'Green', value: 'Green' }]}
            defaultSelected={['Red']}
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <Checkbox
            name="isAquatic"
            label="Is an aquatic plant"
          />
        </Space>
        <RadioButton
          name="treeType"
          label="Oak"
          value="oak"
        />
        <RadioButton
          name="treeType"
          label="Maple"
          value="maple"
          defaultChecked
        />
        <RadioButton
          name="treeType"
          label="Mahogany"
          value="mahogany"
        />
        <Space margin={[2, 0, 0, 0]}>
          <button type="submit">Submit</button>
        </Space>
      </Form.Form>
    </Form>
  )).add('dynamic', () => (
    <View>
      <p>Dynamic form fields with dynamic and complex field names</p>
      <Form
        onSubmit={action('onSubmit')}
        validationSchema={
            Form.validation.object().shape({
              details: Form.validation.array().of(
                Form.validation.object().shape({
                  text: Form.validation.string().required(),
                  checkbox: Form.validation.boolean().equals([true]).required(),
                }).required(),
              ).required(),
            }).required()
          }
      >
        <Form.Form>
          {
              [0, 1, 2, 3].map((x) => (
                <Space margin={[3, 0]}>
                  <View>
                    <TextInput
                      name={`details[${x}].text`}
                      label={`Text-${x + 1}`}
                      defaultValue={x !== 1 ? `Text ${x + 1}` : ''}
                    />
                    <Space margin={[1, 0]}>
                      <Checkbox
                        name={`details[${x}].checkbox`}
                        label={`Checkbox-${x + 1}`}
                        defaultChecked={x !== 1}
                      />
                    </Space>
                  </View>
                </Space>
              ))
            }
          <Space margin={[2, 0, 0, 0]}>
            <Button type="submit">Submit</Button>
          </Space>
        </Form.Form>
      </Form>
    </View>
  ))
  .add('amount', () => (
    <Form
      onSubmit={action('onSubmit')}
      validationSchema={
        Form.validation.object().shape({
          required: Form.validation.amount().required(),
          min: Form.validation.amount().min(200),
          max: Form.validation.amount().max(10),
          lessThan: Form.validation.amount().lessThan(50),
          moreThan: Form.validation.amount().moreThan(50),
          negative: Form.validation.amount().negative(),
          positive: Form.validation.amount().positive(),
        })
      }
    >
      <Form.Form>
        <Space margin={[0, 0, 2, 0]}>
          <TextInput
            name="required"
            label="Amount Required"
            defaultValue="100.10"
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <TextInput
            name="min"
            label="Min Amount"
            defaultValue="100.10"
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <TextInput
            name="max"
            label="Max Amount"
            defaultValue="100.10"
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <TextInput
            name="lessThan"
            label="LessThan Amount"
            defaultValue="100.10"
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <TextInput
            name="moreThan"
            label="MoreThan Amount"
            defaultValue="100.10"
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <TextInput
            name="negative"
            label="Negative Amount"
            defaultValue="100.10"
          />
        </Space>
        <Space margin={[0, 0, 2, 0]}>
          <TextInput
            name="positive"
            label="Positive Amount"
            defaultValue="100.10"
          />
        </Space>
        <Button type="submit">
            Submit
        </Button>
      </Form.Form>
    </Form>
  ));
