export const random501to600 = () => {
  const n = Math.floor(Math.random() * (600 - 501 + 1) + 501)
  if (n >= 501 && n <= 600) return n
}
