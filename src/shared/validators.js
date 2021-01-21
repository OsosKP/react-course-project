export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }
  return isValid;
};

export const errorMapper = (errorMessage) => {
  const errorMap = {
    INVALID_PASSWORD: 'You have entered an invalid username or password.',
    EMAIL_EXISTS: 'The entered email already exists.',
    EMAIL_NOT_FOUND: 'The entered email is not associated with an existing account.',
    'WEAK_PASSWORD : Password should be at least 6 characters':
      'Password too weak - please use at least six characters.'
  };

  return errorMap[errorMessage] ? errorMap[errorMessage] : errorMessage;
};
