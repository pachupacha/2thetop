const mapa = new Map()
mapa.set('name', 'Pedro')
mapa.set('surname', 'Angosto')
mapa.set('age', 34)
console.log(mapa)

const mapa2 = new Map([
  ['name', 'kEnAi'],
  ['age', 7],
])

for (let [key, value] of mapa) {
  console.log(`Llave: ${key} | Valor: ${value}`)
}
// for (let [key, value] of mapa2) {
//   console.log(`Llave: ${key} | Valor: ${value}`)
// }

const keysMapa2 = [...mapa2.keys()]
const valuesMapa2 = [...mapa2.values()]

console.log(keysMapa2, valuesMapa2)
