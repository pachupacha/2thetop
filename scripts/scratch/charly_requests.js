let primitiveVariable = 0
primitiveVariable = 1
primitiveVariable = 2
console.log(primitiveVariable)

const randomObject = {
  numero: primitiveVariable,
}

console.log(randomObject)

randomObject.numero = 8

console.log(randomObject)

randomObject.randomArray = []

const newCharlesArray = [1, 2, 3, 4, 5]

newCharlesArray.forEach((n, i) => randomObject.randomArray.push({ name: n, index: i }))

randomObject.randomArray[3].name = randomObject.randomArray[3].name.toString()

console.log(randomObject.randomArray[3])
