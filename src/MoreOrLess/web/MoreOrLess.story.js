import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Space from '../../Space/web';
import View from '../../View/web';
import MoreOrLess from '../web';

makeStories(storiesOf, {
  isAMP: false,
  Space,
  View,
  MoreOrLess,
});
