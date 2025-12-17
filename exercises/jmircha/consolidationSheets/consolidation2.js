export const consolidation2 = (text, n) => {
  if (typeof text !== "string")
    return `Your input (${text} is not valid. Only string type allowed.)`;
  if (typeof n !== "number")
    return `Your input (${n}) must be an valid number.`;
  if (n <= 0)
    return `Your input (${n}) is not valid. Only positive intengers are allowed.`;
  if (n > text.length) return text;
  let slicering = text.slice(text.length - n);
  return slicering;
};
