export const sortAscDesc = (numbers) => {
  if (!Array.isArray(numbers)) return false

  if (numbers.length === 0) return false

  if (!numbers.every((n) => typeof n === 'number')) return false

  const normalSort = numbers.toSorted((a, b) => a - b)
  console.log(normalSort)
  const reversedSort = numbers.toSorted((a, b) => a - b).reverse()
  console.log(reversedSort)

  return { normalSort, reversedSort }
}
