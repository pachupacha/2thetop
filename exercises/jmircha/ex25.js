// two options_____________________________________________________________________________
//option a:

// const deleteDuplicates = (numbers) => {
//   if (!Array.isArray(numbers)) return "It's not an Array."

//   if (numbers.length === 0) return 'Almost put 2 numbers to inicializate.'

//   if (numbers.length === 1) return 'Almost put 2 numbers to inicializate.'

//   const uniqueNumbersArray = numbers.filter((n, i, numbers) => numbers.indexOf(n) === i)

//   return uniqueNumbersArray
// }

// console.log(deleteDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 6]))

// const randomArray = [1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7, 7]

// const uniqueSet = new Set(randomArray)

// console.log(uniqueSet)

// const uniqueArray = [...uniqueSet]

// console.log(uniqueArray)

//option b:

export const deleteDuplicates = (numbers) => {
  if (!Array.isArray(numbers)) return "It's not an Array."

  if (numbers.length === 0) return 'Almost put 2 numbers to inicializate.'

  if (numbers.length === 1) return 'Almost put 2 numbers to inicializate.'

  const uniqueNumbersArray = []

  numbers.forEach((n) => {
    if (!uniqueNumbersArray.includes(n)) uniqueNumbersArray.push(n)
  })

  return uniqueNumbersArray
}
