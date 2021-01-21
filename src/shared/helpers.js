export const createInputElement = (elementType, inputType, placeholder, value, validation) => {
  return {
    elementType: elementType,
    elementConfig: {
      type: inputType,
      placeholder: placeholder
    },
    value: value,
    validation: validation,
    valid: false,
    touched: false
  };
};
