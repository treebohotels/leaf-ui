import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Space from '../../Space/amp';
import View from '../../View/amp';
import MoreOrLess from '../amp';

makeStories(storiesOf, {
  isAMP: true,
  Space,
  View,
  MoreOrLess,
});
