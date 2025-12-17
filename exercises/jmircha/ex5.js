export const reverseText = (text) => {
  if (typeof text !== "string") return "You must put a valid string.";
  return text.split("").reverse().join("");
};
