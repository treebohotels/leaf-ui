import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Flex from '../../Flex/web';
import View from '../../View/web';
import Space from '../../Space/web';
import Button from '../web';

makeStories(storiesOf, {
  Flex,
  View,
  Space,
  Button,
});
