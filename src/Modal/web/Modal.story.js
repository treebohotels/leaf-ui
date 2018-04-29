import { storiesOf } from '@storybook/react';
import Toggle from '../../Toggle/web';
import Button from '../../Button/web';
import Text from '../../Text/web';
import Flex from '../../Flex/web';
import Tabs from '../../Tabs/web';
import Modal from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Toggle,
  Button,
  Text,
  Flex,
  Tabs,
  Modal,
});
