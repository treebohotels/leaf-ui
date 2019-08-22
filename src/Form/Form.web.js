import { Formik, Form as FormikForm, Field as FormikField } from 'formik';
import validation from './validation';

const Form = Formik;

Form.Form = FormikForm;

Form.Field = FormikField;

Form.validation = validation;

export default Form;
