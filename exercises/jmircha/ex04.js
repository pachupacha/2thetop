export const repeatText = (text, n) => {
  if (typeof text !== "string") return "Not a string.";
  if (typeof n !== "number") return "Not a Number.";
  if (n <= 0) return "Invalid input. put a valid number.";
  let result = Array(n).fill(text).join(" ");
  return result;
};
