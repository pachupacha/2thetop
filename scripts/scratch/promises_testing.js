function promiseTest(value) {
  if (typeof value !== 'number') return Promise.reject(new TypeError(`The Value ${value} must be a Number Type.`))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      })
    }, 0 | (Math.random() * 100))
  })
}

// promiseTest(0)
//   .then((obj) => {
//     console.log(`Promise Start`)
//     console.log(`Promise: ${obj.value}, ${obj.result}`)
//   })
//   .catch((err) => console.error(err))

const AsyncPromiseTest = async () => {
  try {
    let obj = await promiseTest(0)
    console.log(`Promise: ${obj.value}, ${obj.result}`)

    obj = await promiseTest(1)
    console.log(`Promise: ${obj.value}, ${obj.result}`)

    obj = await promiseTest(2)
    console.log(`Promise: ${obj.value}, ${obj.result}`)

    obj = await promiseTest('Peter')
    console.log(`Promise: ${obj.value}, ${obj.result}`)

    obj = await promiseTest(4)
    console.log(`Promise: ${obj.value}, ${obj.result}`)

    obj = await promiseTest(5)
    console.log(`Promise: ${obj.value}, ${obj.result}`)
  } catch (err) {
    console.error(err)
  }
}

AsyncPromiseTest()
