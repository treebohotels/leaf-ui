import { storiesOf } from '@storybook/react';
import Spacer from '../../Spacer/amp';
import Flex from '../../Flex/amp';
import Button from '../amp';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Button,
  Spacer,
  Flex,
});
