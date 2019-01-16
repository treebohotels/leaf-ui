import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Card from '../web';
import Space from '../../Space/web';
import Text from '../../Text/web';
import View from '../../View/web';

makeStories(storiesOf, {
  Card,
  Space,
  Text,
  View,
});
