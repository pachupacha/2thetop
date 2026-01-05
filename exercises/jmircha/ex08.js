export const removeText = (text, w) => {
  if (typeof text !== 'string') return 'Not a valid text.'
  if (typeof w !== 'string') return 'Not a valid text.'
  return text.replaceAll(w, '')
}
