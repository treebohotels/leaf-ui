import React from 'react';
import { action } from '@storybook/addon-actions';
import theme from '../theme';

const options = Object.keys(theme.color).map((color) => ({
  label: color,
  value: color,
}));

export default (storiesOf, {
  Card,
  Tag,
  Text,
  Select,
  Spacer,
  Table,
}) =>
  storiesOf('Table', module)
    .add('playground', () => (
      <Card>
        <Table>
          <Table.THead>
            <Table.TR>
              <Table.TH>Type</Table.TH>
              <Table.TH>Date</Table.TH>
              <Table.TH>ID</Table.TH>
            </Table.TR>
          </Table.THead>
          <Table.TBody>
            <Table.TR>
              <Table.TD>Oak</Table.TD>
              <Table.TD>2018/11/4</Table.TD>
              <Table.TD>TRB-101</Table.TD>
            </Table.TR>
          </Table.TBody>
        </Table>
      </Card>
    ))
    .add('default', () => (
      <Table>
        <Table.THead>
          <Table.TR>
            <Table.TH>Type</Table.TH>
            <Table.TH>Date</Table.TH>
            <Table.TH>ID</Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD>Pragya</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    ))
    .add('with select', () => (
      <Table elevation={2}>
        <Table.TBody>
          <Table.TR>
            <Table.TH>Type</Table.TH>
            <Table.TH>Date</Table.TH>
            <Table.TH>ID</Table.TH>
            <Table.TH>Paid By</Table.TH>
            <Table.TH>Paid To</Table.TH>
            <Table.TH>Mode</Table.TH>
            <Table.TH>Via</Table.TH>
            <Table.TH>Amount</Table.TH>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Select
              name="color"
              label="Color"
              options={options}
              onChange={action('onChange')}
            />
            <Table.TD>10/11/2018</Table.TD>
            <Table.TD>oak</Table.TD>
            <Table.TD>reserved</Table.TD>
            <Table.TD>2000</Table.TD>
            <Table.TD>2000</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Select
              name="color"
              label="Color"
              options={options}
              onChange={action('onChange')}
            />
            <Table.TD>10/11/2018</Table.TD>
            <Table.TD>oak</Table.TD>
            <Table.TD>reserved</Table.TD>
            <Table.TD>2000</Table.TD>
            <Table.TD>2000</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    ))
    .add('with tag', () => (
      <Table elevation={2}>
        <Table.TBody>
          <Table.TR>
            <Table.TH>Type</Table.TH>
            <Table.TH>Date</Table.TH>
            <Table.TH>ID</Table.TH>
            <Table.TH>Paid By</Table.TH>
            <Table.TH>Paid To</Table.TH>
            <Table.TH>Mode</Table.TH>
            <Table.TH>Via</Table.TH>
            <Table.TH>Amount</Table.TH>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD>
              <Text size="s">Oak</Text>
              <Spacer margin={[1, 0, 0, 0]}>
                <Tag
                  kind="outlined"
                  shape="capsular"
                >
                  Chip
                </Tag>
              </Spacer>
            </Table.TD>
            <Table.TD>10/11/2018</Table.TD>
            <Table.TD>oak</Table.TD>
            <Table.TD>reserved</Table.TD>
            <Table.TD>2000</Table.TD>
            <Table.TD>2000</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    ));
