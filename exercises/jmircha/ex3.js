export const separateText = (text, separator) => {
  if (typeof text !== "string")
    return "You must put a valid phrase (Invalid input).";
  if (typeof separator !== "string")
    return "You must put a valid phrase (Invalid separator)";
  if (!separator) return "You must preset a separator. (space recommended)";
  let separatedText = text.split(separator);
  return separatedText;
};
