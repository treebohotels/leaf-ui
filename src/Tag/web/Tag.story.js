import { storiesOf } from '@storybook/react';
import Spacer from '../../Spacer/web';
import Flex from '../../Flex/web';
import Tag from '../web';

import makeStories from '../makeStories';

makeStories(storiesOf, {
  Tag,
  Spacer,
  Flex,
});
