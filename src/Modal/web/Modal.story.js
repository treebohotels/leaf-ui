import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Toggle from '../../Toggle/web';
import Button from '../../Button/web';
import Text from '../../Text/web';
import Flex from '../../Flex/web';
import View from '../../View/web';
import Tabs from '../../Tabs/web';
import Modal from '../web';

makeStories(storiesOf, {
  Toggle,
  Button,
  Text,
  Flex,
  View,
  Tabs,
  Modal,
});
