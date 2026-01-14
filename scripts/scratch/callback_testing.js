function modify(array, callback) {
  array.push('Pepe')
  console.log(array)
  setTimeout(function () {
    callback(array)
  }, 3000)
}
const gente = ['Salvador', 'Iñaki', 'Ramón']

modify(gente, function (array) {
  console.log(`Logré hacer callback y ahora es de ${array.length} elementos!`)
})

const testFunction = (value) => {
  if (typeof value !== 'number') return Promise.reject(`Error: input ${value}must be Number Type.`)

  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          value,
          result: value * value,
        }),
      0 | (Math.random() * 100),
    )
  })
}

testFunction(0)
  .then((obj) => console.log(obj))
  .catch()
