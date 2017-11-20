import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from './Tabs';

storiesOf('Tabs', module)
  .add('simple', () => (
    <Tabs>
      <Tabs.Section>
        <Tabs.Section.Title>One</Tabs.Section.Title>
        <Tabs.Section.Content>
          Content for One
        </Tabs.Section.Content>
      </Tabs.Section>
      <Tabs.Section>
        <Tabs.Section.Title>Two</Tabs.Section.Title>
        <Tabs.Section.Content>
          Content for Two
        </Tabs.Section.Content>
      </Tabs.Section>
    </Tabs>
  ));
