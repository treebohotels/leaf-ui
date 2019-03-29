import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Card from '../amp';
import Space from '../../Space/amp';
import Text from '../../Text/amp';
import View from '../../View/amp';

makeStories(storiesOf, {
  Card,
  Space,
  Text,
  View,
});
