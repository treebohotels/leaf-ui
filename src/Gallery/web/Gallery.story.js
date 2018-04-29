import { storiesOf } from '@storybook/react';
import Image from '../../Image/web';
import Gallery from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Gallery,
  Image,
});
