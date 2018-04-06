export default (
  amount,
  singularForm,
  pluralForm = `${singularForm}s`,
) => {
  let word = '';

  if (+amount === 1) {
    word = singularForm;
  } else {
    word = pluralForm;
  }

  return word;
};
