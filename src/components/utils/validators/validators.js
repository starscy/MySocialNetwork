export const required = (value) => {
  if (value && value.length > 0) {
    return undefined;
  }
  return "Необходимо заполнить это поле";
};

export const maxLength10 = (value) => {
  if (value && value.length > 10) {
    return `Must be ${10} characters or less`;
  }
  return undefined;
};

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
