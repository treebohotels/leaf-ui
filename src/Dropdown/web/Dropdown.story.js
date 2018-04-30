import { storiesOf } from '@storybook/react';
import Button from '../../Button/web';
import List from '../../List/web';
import Icon from '../../Icon/web';
import Dropdown from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Dropdown,
  Icon,
  List,
  Button,
});
