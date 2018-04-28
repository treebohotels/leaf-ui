import { storiesOf } from '@storybook/react';
import Icon from '../../Icon/web';
import Text from '../../Text/web';
import List from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, { List, Text, Icon });
