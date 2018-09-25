import { storiesOf } from '@storybook/react';
import makeStories from '../makeStories';
import Space from '../../Space/web';
import TextInput from '../../TextInput/web';
import Select from '../../Select/web';
import Checkbox from '../../Checkbox/web';
import RadioButton from '../../RadioButton/web';
import DatePickerInput from '../../DatePickerInput/web';
import DateRangePickerInput from '../../DateRangePickerInput/web';
import Button from '../../Button/web';
import View from '../../View/web';
import Form from '../web';

makeStories(storiesOf, {
  Space,
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  DatePickerInput,
  DateRangePickerInput,
  Button,
  View,
  Form,
});
