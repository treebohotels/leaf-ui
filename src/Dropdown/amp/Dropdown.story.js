import { storiesOf } from '@storybook/react';
import Button from '../../Button/amp';
import List from '../../List/amp';
import Icon from '../../Icon/amp';
import Dropdown from '../amp';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Dropdown,
  Icon,
  List,
  Button,
});
