export const consolidation3 = (text, n) => {
  if (typeof text !== "string")
    return `Your input (${text} is not valid. Only string type allowed.)`;
  if (typeof n !== "number")
    return `Your input (${n}) must be an valid number.`;
  if (n < text.length) return `${text.slice(0, n)}...`;
  if (n >= text.length) return text;
};
