import { Formik, Form as FormikForm, Field as FormikField } from 'formik';
import yup from 'yup';

const Form = Formik;

Form.Form = FormikForm;

Form.Field = FormikField;

Form.validation = yup;

export default Form;
