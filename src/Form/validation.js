/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

const locale = {
  mixed: {
    required: '${path} is required',
    notType: 'Enter a valid ${path}',
  },
  string: {
    name: 'Enter a valid ${path}',
    matches: 'Enter a valid ${path}',
  },
};

function inherits(ctor, superCtor, spec) {
  // eslint-disable-next-line no-param-reassign
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  Object.assign(ctor.prototype, spec);
}

function AmountSchema() {
  if (!(this instanceof AmountSchema)) return new AmountSchema();
  yup.mixed.call(this, { type: 'amount' });

  this.withMutation(() => {
    this.transform(function amountTransform(value) {
      if (this.isType(value)) {
        return value;
      }
      return NaN;
    });
  });
}

inherits(AmountSchema, yup.mixed, {
  // eslint-disable-next-line no-underscore-dangle
  _typeCheck(value) {
    return /^-?\d+(\.\d{1,2})?$/.test(value);
  },

  min(min, message = '${path} must be greater than or equal to ${min}') {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: { min },
      test(value) {
        return value == null || +value >= this.resolve(min);
      },
    });
  },

  max(max, message = '${path} must be lesser than or equal to ${max}') {
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: { max },
      test(value) {
        return value == null || +value <= this.resolve(max);
      },
    });
  },

  lessThan(lessThan, message = '${path} must be lesser than ${lessThan}') {
    return this.test({
      message,
      name: 'lessThan',
      exclusive: true,
      params: { lessThan },
      test(value) {
        return value == null || +value < this.resolve(lessThan);
      },
    });
  },

  moreThan(moreThan, message = '${path} must be greater than ${moreThan}') {
    return this.test({
      message,
      name: 'moreThan',
      exclusive: true,
      params: { moreThan },
      test(value) {
        return value == null || +value > this.resolve(moreThan);
      },
    });
  },

  positive(msg = '${path} must be a positive amount') {
    return this.min(0, msg);
  },

  negative(msg = '${path} must be a negative amount') {
    return this.max(0, msg);
  },
});

yup.setLocale(locale);
yup.amount = AmountSchema;
yup.addMethod(yup.string, 'name', function nameMethod(message) {
  const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
  // eslint-disable-next-line no-template-curly-in-string
  return this.test('name', locale.string.name, function nameTest() {
    return nameRegex.test(this.options.originalValue) || this.createError({ message });
  });
});

export default yup;
