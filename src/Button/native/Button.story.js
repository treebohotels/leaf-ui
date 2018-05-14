import { storiesOf } from '@storybook/react-native';
import makeStories from '../makeStories';
import Flex from '../../Flex/native';
import View from '../../View/native';
import Space from '../../Space/native';
import Button from '../native';

makeStories(storiesOf, {
  Flex,
  View,
  Space,
  Button,
});
