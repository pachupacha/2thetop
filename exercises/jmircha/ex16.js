export const applyDiscount = (amount, discount) => {
  if (typeof amount !== 'number' || typeof discount !== 'number') return false
  if (discount <= 0 || discount >= 100) return false

  const discountAmount = amount * (discount / 100)
  const finalAmount = amount - discountAmount

  const message = `Your amount due is $${finalAmount.toFixed(2)} (discount applied ${discount}%: -$${discountAmount.toFixed(2)})`

  return { discountAmount, amount, message }
}
