import { Formik, Form as FormikForm, Field as FormikField } from 'formik';
import yup from 'yup';

const Form = Formik;

Form.Form = FormikForm;

Form.Field = FormikField;

yup.addMethod(yup.number, 'amount', function amountMethod(message) {
  const amountRegex = /^-?\d+(\.\d{2})?$/;
  // eslint-disable-next-line no-template-curly-in-string
  return this.test('amount', '${path} is not an amount', function amountTest() {
    return amountRegex.test(this.options.originalValue)
      || this.createError({ message });
  });
});
Form.validation = yup;

export default Form;
