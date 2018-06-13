import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Space from '../../Space/web';
import View from '../../View/web';
import Text from '../web';

makeStories(storiesOf, {
  Space,
  View,
  Text,
});
