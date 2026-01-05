export const binarieConvertion = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') return 'Invalid input.'
  if (n1 === undefined || n2 === undefined) return 'You must put data.'

  if (n2 === 2) {
    return parseInt(n1, 2)
  }

  if (n2 === 10) {
    return Number(n1).toString(2)
  }

  return false
}
