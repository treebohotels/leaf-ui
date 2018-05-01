import { storiesOf } from '@storybook/react';
import Card from '../../Card/web';
import Tag from '../../Tag/web';
import Text from '../../Text/web';
import Select from '../../Select/web';
import Spacer from '../../Spacer/web';
import Table from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Card,
  Tag,
  Text,
  Select,
  Spacer,
  Table,
});
