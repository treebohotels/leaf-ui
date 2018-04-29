import { storiesOf } from '@storybook/react-native';
import Spacer from '../../Spacer/native';
import Flex from '../../Flex/native';
import Button from '../native';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Button,
  Spacer,
  Flex,
});
