import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Accordion from '../amp';
import View from '../../View/amp';
import Space from '../../Space/amp';
import Icon from '../../Icon/amp';
import Divider from '../../Divider/amp';
import Text from '../../Text/amp';
import Flex from '../../Flex/amp';
import Image from '../../Image/amp';

makeStories(storiesOf, {
  Accordion,
  View,
  Space,
  Icon,
  Divider,
  Text,
  Flex,
  Image,
});
