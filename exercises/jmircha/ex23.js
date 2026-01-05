export const evenOddMachine = (numbers) => {
  if (!Array.isArray(numbers)) return false

  if (numbers.length === 0) return false

  if (!numbers.every((n) => typeof n === 'number')) return false

  const evenArray = []
  const oddArray = []

  numbers.forEach((n) => {
    if (n % 2 === 0) evenArray.push(n)
    if (n % 2 === 1) oddArray.push(n)
  })

  return { evenArray, oddArray }
}
