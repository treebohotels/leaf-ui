import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import theme from '../theme';
import Tag from '../Tag';
import Text from '../Text';
import Select from '../Select';
import Space from '../Space';
import Card from '../Card';
import Table from './Table';

const options = Object.keys(theme.color).map((color) => ({
  label: color,
  value: color,
}));

storiesOf('Table', module).addParameters({
  component: Table,
})
  .add('default', () => (
    <Card>
      <Table>
        <Table.THead>
          <Table.TR>
            <Table.TH>Type</Table.TH>
            <Table.TH>Date</Table.TH>
            <Table.TH textAlign="right">ID</Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </Card>
  ))
  .add('with select', () => (
    <Card>
      <Table>
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
              <Select
                name="color"
                label="Color"
                options={options}
                onChange={action('onChange')}
              />
            </Table.TD>
            <Table.TD>10/11/2018</Table.TD>
            <Table.TD>oak</Table.TD>
            <Table.TD>reserved</Table.TD>
            <Table.TD>2000</Table.TD>
            <Table.TD>2000</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD>
              <Select
                name="color"
                label="Color"
                options={options}
                onChange={action('onChange')}
              />
            </Table.TD>
            <Table.TD>10/11/2018</Table.TD>
            <Table.TD>oak</Table.TD>
            <Table.TD>reserved</Table.TD>
            <Table.TD>2000</Table.TD>
            <Table.TD>2000</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </Card>
  ))
  .add('with tag', () => (
    <Card>
      <Table>
        <Table.THead>
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
        </Table.THead>
        <Table.TBody>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD>
              <Text size="s">Oak</Text>
              <Space margin={[1, 0, 0, 0]}>
                <Tag
                  kind="outlined"
                  shape="capsular"
                >
                    Chip
                </Tag>
              </Space>
            </Table.TD>
            <Table.TD>10/11/2018</Table.TD>
            <Table.TD>oak</Table.TD>
            <Table.TD>reserved</Table.TD>
            <Table.TD>2000</Table.TD>
            <Table.TD>2000</Table.TD>
          </Table.TR>
          <Table.TR onClick={action('onClick')}>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD>
              <Text size="s">Oak</Text>
              <Space margin={[1, 0, 0, 0]}>
                <Tag
                  kind="outlined"
                  shape="capsular"
                >
                    Chip
                </Tag>
              </Space>
            </Table.TD>
            <Table.TD>10/11/2018</Table.TD>
            <Table.TD>oak</Table.TD>
            <Table.TD>reserved</Table.TD>
            <Table.TD>2000</Table.TD>
            <Table.TD>2000</Table.TD>
          </Table.TR>
          <Table.TR onClick={action('onClick')} disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD>
              <Text size="s">Oak</Text>
              <Space margin={[1, 0, 0, 0]}>
                <Tag
                  kind="outlined"
                  shape="capsular"
                >
                    Chip
                </Tag>
              </Space>
            </Table.TD>
            <Table.TD>10/11/2018</Table.TD>
            <Table.TD>oak</Table.TD>
            <Table.TD>reserved</Table.TD>
            <Table.TD>2000</Table.TD>
            <Table.TD>2000</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </Card>
  ))
  .add('sticky header', () => (
    <Card>
      <Table>
        <Table.THead sticky>
          <Table.TR>
            <Table.TH>Type</Table.TH>
            <Table.TH>Date</Table.TH>
            <Table.TH textAlign="right">ID</Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>
              <Select
                name="color"
                label="Color"
                options={options}
                onChange={action('onChange')}
              />
            </Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>
              <Select
                name="color"
                label="Color"
                options={options}
                onChange={action('onChange')}
              />
            </Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR disabled>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>1000</Table.TD>
            <Table.TD>2</Table.TD>
            <Table.TD textAlign="right">Pragya</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </Card>
  ));
