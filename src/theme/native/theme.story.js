import { storiesOf } from '@storybook/react-native';
import Flex from '../../Flex/native';
import Space from '../../Space/native';
import Size from '../../Size/native';
import View from '../../View/native';
import Text from '../../Text/native';
import Card from '../../Card/native';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Flex,
  Space,
  Size,
  View,
  Text,
  Card,
});
