export const isBlank = (value) => {
  // Check if value when trimmed is falsy(false)

  if (!value.trim()) {
    return true;
  }

  return false;
};

export const isWithinMinRange = (value, min) => {
  if (value.length >= min) {
    return true;
  }

  return false;
};
