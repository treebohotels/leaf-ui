import { storiesOf } from '@storybook/react';
import Card from '../../Card/web';
import Spacer from '../../Spacer/web';
import MoreOrLess from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, { MoreOrLess, Card, Spacer });
