export const nameValidation = (text) => {
  if (typeof text !== 'string') return false

  const wordsRegEx = /^[A-Za-zÁáÉéÍíÓóÚúÑñÜü\s]+$/g.test(text)

  return wordsRegEx ? 'Is a Valid Name.' : 'Not a Valid Name.'
}
