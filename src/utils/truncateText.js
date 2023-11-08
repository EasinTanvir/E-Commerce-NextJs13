export const truncateText = (text) => {
  if (text.length < 25) return text;

  return text.substring(0, 25) + "...";
};
