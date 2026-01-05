export const maxAndMin = (numbers) => {
  if (!Array.isArray(numbers)) return false

  if (numbers.length === 0) return false

  if (!numbers.every((n) => typeof n === 'number')) return false

  const sortedNumbers = numbers.toSorted((a, b) => a - b)

  const maxNumber = sortedNumbers[0]
  const minNumber = sortedNumbers[sortedNumbers.length - 1]

  return { minNumber, maxNumber }
}

console.log(maxAndMin([1, 3, 2, 5, 2, 4]))

export const maxAndMin2 = (numbers) => {
  if (!Array.isArray(numbers)) return false

  if (numbers.length === 0) return false

  if (!numbers.every((n) => typeof n === 'number')) return false

  const maxNumber = Math.max(...numbers)
  const minNumber = Math.min(...numbers)

  return { minNumber, maxNumber }
}

console.log(maxAndMin2([1, 3, 2, 5, 2, 4]))
