import { storiesOf } from '@storybook/react-native';
import makeStories from '../makeStories';
import Space from '../../Space/native';
import View from '../../View/native';
import Text from '../native';

makeStories(storiesOf, {
  Space,
  View,
  Text,
});
