import { Formik, Form as FormikForm, Field as FormikField } from 'formik';
import * as yup from 'yup';
import { locale, AmountSchema } from '../validationSchema';

const Form = Formik;

Form.Form = FormikForm;

Form.Field = FormikField;

yup.setLocale(locale);
yup.amount = AmountSchema;
Form.validation = yup;

export default Form;
