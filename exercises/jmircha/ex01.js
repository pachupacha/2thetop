export const characterCount = (text) => {
  if (typeof text !== "string")
    return `Your input (${text} is not valid. Only string type allowed.)`;
  let result = text.length;
  return result;
};
