import { storiesOf } from '@storybook/react';
import Text from '../../Text/web';
import Icon from '../../Icon/web';
import List from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Text,
  Icon,
  List,
});
