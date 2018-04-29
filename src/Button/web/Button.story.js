import { storiesOf } from '@storybook/react';
import Spacer from '../../Spacer/web';
import Flex from '../../Flex/web';
import Button from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Button,
  Spacer,
  Flex,
});
