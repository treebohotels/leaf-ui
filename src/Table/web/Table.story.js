import { storiesOf } from '@storybook/react';
import Card from '../../Card/web';
import Select from '../../Select/web';
import Tag from '../../Tag/web';
import Text from '../../Text/web';
import Spacer from '../../Spacer/web';
import Table from './Table';
import makeStories from '../makeStories';

makeStories(storiesOf, { Card, Table, Tag, Text, Select, Spacer });
