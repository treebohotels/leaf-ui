import { storiesOf } from '@storybook/react';
import Card from '../../Card/web';
import Spacer from '../../Spacer/web';
import MoreOrLess from '../amp';
import makeStories from '../makeStories';

makeStories(storiesOf, { MoreOrLess, Card, Spacer });
