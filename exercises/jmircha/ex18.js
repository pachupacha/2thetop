export const howManyVowels = (text) => {
  if (typeof text !== 'string') return false

  const vowelsRegEx = /[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/
  const consonantsRegEx = /[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/

  let vowelsCounter = 0
  let consonantsCounter = 0

  for (let w of text) {
    if (vowelsRegEx.test(w)) {
      vowelsCounter++
    }
    if (consonantsRegEx.test(w)) {
      consonantsCounter++
    }
  }

  const message = `Vowels: ${vowelsCounter}; Consonats: ${consonantsCounter}.`

  return [vowelsCounter, consonantsCounter, message]
}
