import { storiesOf } from '@storybook/react';
import Card from '../../Card/web';
import Spacer from '../../Spacer/web';
import Icon from '../../Icon/amp';
import Divider from '../../Divider/web';
import Text from '../../Text/web';
import Accordion from '../amp';
import makeStories from '../makeStories';

makeStories(storiesOf, { Accordion, Card, Spacer, Icon, Divider, Text });
