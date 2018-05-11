import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Button from '../../Button/amp';
import List from '../../List/amp';
import Icon from '../../Icon/amp';
import Dropdown from '../amp';

makeStories(storiesOf, {
  Dropdown,
  Icon,
  List,
  Button,
});
