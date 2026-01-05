export const factorialOne = (n) => {
  if (typeof n !== 'number') return false
  if (n < 0) return false
  if (!Number.isInteger(n)) return false
  if (n === 0 || n === 1) return 1

  return n * factorialOne(n - 1)
}

export const factorialTwo = (n) => {
  if (typeof n !== 'number') return false
  if (n < 0) return false
  if (!Number.isInteger(n)) return false
  if (n === 0 || n === 1) return 1
  let resultado = 1
  for (let i = 2; i <= n; i++) {
    resultado *= i
  }
  return resultado
}
