import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Button from '../../Button/web';
import List from '../../List/web';
import Icon from '../../Icon/web';
import Dropdown from '../web';

makeStories(storiesOf, {
  Dropdown,
  Icon,
  List,
  Button,
});
