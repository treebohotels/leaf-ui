import { storiesOf } from '@storybook/react';
import Image from '../../Image/amp';
import Gallery from '../amp';
import Spacer from '../../Spacer/amp';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Gallery,
  Image,
  Spacer,
});
