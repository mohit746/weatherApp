const validationText = (value) =>
  value && /[^a-zA-Z0-9 ]{3,30}$/i.test(value)
    ? 'Please fill the field'
    : undefined;

const isAlphaNumeric = (value) => {
  return /^[0-9a-zA-Z+-/]+$/.test(value)
    ? undefined
    : 'Please enter valid character';
};

const isNumeric = (value) => {
  return /^[0-9]+$/.test(value) ? undefined : 'Please enter valid number';
};

export {isAlphaNumeric, isNumeric, validationText};
