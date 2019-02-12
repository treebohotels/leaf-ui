import { storiesOf } from '@storybook/react';
import Flex from '../../Flex/web';
import Space from '../../Space/web';
import Size from '../../Size/web';
import View from '../../View/web';
import Text from '../../Text/web';
import Card from '../../Card/web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Flex,
  Space,
  Size,
  View,
  Text,
  Card,
});
