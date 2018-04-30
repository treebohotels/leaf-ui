import { storiesOf } from '@storybook/react';
import Spacer from '../../Spacer/amp';
import Flex from '../../Flex/amp';
import Tag from '../amp';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Tag,
  Spacer,
  Flex,
});
