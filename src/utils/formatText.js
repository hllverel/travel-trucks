export const formatCamperField = (value) => {
  if (!value) return '';

  const withSpaces = value.replace(/([a-z])([A-Z])/g, '$1 $2');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
};