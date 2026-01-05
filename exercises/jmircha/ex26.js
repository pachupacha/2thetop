export const average = (numbers) => {
  if (!Array.isArray(numbers)) return false

  if (numbers.length === 0) return false

  if (!numbers.every((n) => typeof n === 'number')) return false

  let addition = 0

  const newNumbers = numbers.forEach((n) => {
    addition += n
  })

  return `Average: ${(addition / numbers.length).toFixed(2)}`
}
