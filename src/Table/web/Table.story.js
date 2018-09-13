import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Tag from '../../Tag/web';
import Text from '../../Text/web';
import Select from '../../Select/web';
import Space from '../../Space/web';
import Card from '../../Card/web';
import Table from '../web';

makeStories(storiesOf, {
  Tag,
  Text,
  Select,
  Space,
  Card,
  Table,
});
