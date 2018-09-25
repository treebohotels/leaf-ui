import { Formik, Form as FormikForm, Field as FormikField } from 'formik';
import yup from 'yup';
import { AmountSchema } from '../formUtils';

const Form = Formik;

Form.Form = FormikForm;

Form.Field = FormikField;

yup.amount = AmountSchema;
Form.validation = yup;

export default Form;
