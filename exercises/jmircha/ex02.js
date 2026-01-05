export const cutText = (text = null, slicering = null) => {
  if (typeof text !== "string")
    return `Your input (${text}) must be an string.`;
  if (typeof slicering !== "number")
    return `Your input (${slicering}) must be an valid number.`;
  let result = text.slice(0, slicering);
  return result;
};
