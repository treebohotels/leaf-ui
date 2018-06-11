import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Space from '../../Space/amp';
import View from '../../View/amp';
import Text from '../amp';

makeStories(storiesOf, {
  Space,
  View,
  Text,
});
