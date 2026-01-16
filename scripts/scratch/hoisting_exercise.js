console.log(a)
var a = 10 // <----------------

// 2
console.log(b)
let b = 20 // <----------------

// 3
foo()
bar()

function foo() {
  console.log('foo') //<----------------
}

var bar = () => {
  console.log('bar')
} //<----------------

// 4
let x = 5

function test() {
  console.log(x)
  let x = 10
}

test() //<----------------

// 5
function counter() {
  let count = 0
  return function () {
    count++
    console.log(count)
  }
}

const c1 = counter()
c1() //<----------------
c1() //<----------------

// 6
const obj1 = {
  value: 42,
  getValue() {
    console.log(this.value)
  },
}

obj1.getValue() //<----------------

// 7
const obj2 = {
  value: 42,
  getValue: () => {
    console.log(this.value)
  },
}

obj2.getValue() //<----------------

// 8
console.log(1 + '2' + 3) //<----------------
console.log(1 + 2 + '3') //<----------------

// 9
console.log(false == 0) //<----------------
console.log(false === 0) //<----------------

// 10
console.log('A')

setTimeout(() => {
  console.log('B')
}, 0)

console.log('C') //<----------------

// 11
console.log('start')

Promise.resolve().then(() => console.log('promise'))

setTimeout(() => console.log('timeout'), 0)

console.log('end') //<----------------

// 12
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0) //<----------------
}

// 13
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0) //<----------------
}

// 14
const aObj = { n: 1 }
const bObj = aObj
bObj.n = 2

console.log(aObj.n) //<----------------

// 15
console.log(typeof null)
console.log(null instanceof Object) //
