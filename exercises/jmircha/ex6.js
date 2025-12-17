export const howMuchRepeats = (text, w) => {
  if (typeof text !== 'string') return 'invalid input.'
  if (text === '') return 'you must put something.'
  if (typeof w !== 'string') return 'invalid input.'
  if (w === '') return 'you must put something.'

  const wordsArray = text.split(' ')
  let counter = 0

  for (const seekWord of wordsArray) {
    if (seekWord === w) counter++
  }
  return counter
}
