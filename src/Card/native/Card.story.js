import { storiesOf } from '@storybook/react-native';
import Card from '../native';
import View from '../../View/native';
import Space from '../../Space/native';
import Text from '../../Text/native';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Card,
  Space,
  View,
  Text,
});
