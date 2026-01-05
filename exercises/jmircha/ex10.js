export const isPalindrome = (n) => {
  if (typeof n !== 'number' || n <= 0) return false
  const toString = String(n)
  const reversedNumber = toString.split('').reverse().join('')
  if (reversedNumber === toString) return true
  return false
}
