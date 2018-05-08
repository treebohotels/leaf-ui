import { storiesOf } from '@storybook/react';
import Accordion from '../amp';
import Card from '../../Card/amp';
import Spacer from '../../Spacer/amp';
import Icon from '../../Icon/amp';
import Divider from '../../Divider/amp';
import Text from '../../Text/amp';
import Flex from '../../Flex/amp';
import Image from '../../Image/amp';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Accordion,
  Card,
  Spacer,
  Icon,
  Divider,
  Text,
  Flex,
  Image,
});
