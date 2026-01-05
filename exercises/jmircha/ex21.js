export const toSquare = (numbers, pow) => {
  if (typeof pow !== 'number') return false

  if (!Array.isArray(numbers)) return false

  if (!numbers.every((n) => typeof n === 'number')) return false

  return numbers.map((n) => Math.pow(n, pow))
}
