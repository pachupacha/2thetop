export const palindrome = (text) => {
  if (typeof text !== 'string') return 'you must put a valid text.'

  const reversedText = text.toLowerCase().split('').reverse().join('')

  if (reversedText === text.toLowerCase()) return true

  return false
}
