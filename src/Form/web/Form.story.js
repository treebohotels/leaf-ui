import { storiesOf } from '@storybook/react';
import TextInput from '../../TextInput/web';
import Select from '../../Select/web';
import Checkbox from '../../Checkbox/web';
import RadioButton from '../../RadioButton/web';
import Button from '../../Button/web';
import Form from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  Button,
  Form,
});
