import { storiesOf } from '@storybook/react-native';
import makeStories from '../makeStories';
import Flex from '../../Flex/native';
import Space from '../../Space/native';
import View from '../../View/native';
import Tag from '../native';

makeStories(storiesOf, {
  Flex,
  Space,
  View,
  Tag,
});
