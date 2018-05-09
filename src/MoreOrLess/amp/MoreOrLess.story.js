import { storiesOf } from '@storybook/react';
import Spacer from '../../Spacer/web';
import Card from '../../Card/web';
import MoreOrLess from '../amp';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Spacer,
  Card,
  MoreOrLess,
});
