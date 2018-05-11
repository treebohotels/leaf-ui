import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Flex from '../../Flex/web';
import Space from '../../Space/web';
import View from '../../View/web';
import Tag from '../web';

makeStories(storiesOf, {
  Flex,
  Space,
  View,
  Tag,
});
