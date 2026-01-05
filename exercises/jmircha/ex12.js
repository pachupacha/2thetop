export const isPrime = (n) => {
  if (typeof n !== 'number') return false
  if (n <= 1) return false
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) return false
  }
  return true
}
