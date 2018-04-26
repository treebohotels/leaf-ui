import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../../Card/web';
import MoreOrLess from './MoreOrLess';

const LoremIpsum = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.<br /> <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.
  </div>
);

storiesOf('MoreOrLess', module)
  .add('simple', () => (
    <MoreOrLess initialHeight="100px" labelForMore="Show More" labelForLess="Show Less">
      <Card>
        <LoremIpsum />
      </Card>
    </MoreOrLess>
  ));
