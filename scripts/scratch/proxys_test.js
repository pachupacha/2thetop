const aPersonInputValidations = (obj, property, value) => {
  if (!Object.hasOwn(obj, property)) {
    throw new ReferenceError(`The property ${property} doesn't exists in the object aPerson.`)
  }

  if (property === 'name' || property === 'surname') {
    if (typeof value !== 'string') throw new TypeError(`The property ${property} must be a string`)

    const rx = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]{2,40}$/

    if (!rx.test(value)) throw new RangeError(`The property ${property} has invalid characters/length`)
  }

  if (property === 'age') {
    if (!Number.isInteger(value)) throw new TypeError(`age must be an integer`)

    if (value < 0 || value > 120) throw new RangeError(`age out of range`)
  }
}

const aPerson = { name: '', surname: '', age: 0 }

const aPersonHandler = {
  set(obj, property, value) {
    aPersonInputValidations(obj, property, value)
    obj[property] = value
    return true
  },
}

const ramon = new Proxy(aPerson, aPersonHandler)
ramon.name = 'Ramón'
ramon.surname = 'Valdéz'
ramon.age = 65
// ramon.email = 'monchito@gmail.com'
console.log(Object.keys(ramon))
console.log(ramon)
