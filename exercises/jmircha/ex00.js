const arr = [1, 2, 3, 4, 5]

// Iteración-----------------------------------------------------------
arr.forEach((el) => console.log(el))
// Ejecuta una función para cada elemento (no retorna nada)

arr.map((el) => el * 2)
// Crea un nuevo array con los resultados de aplicar una función

arr.filter((el) => el > 3)
// Retorna un nuevo array con los elementos que cumplan la condición

arr.reduce((acc, el) => acc + el, 0)
// Reduce el array a un solo valor, acumulando con una función

arr.reduceRight((acc, el) => acc + el, 0)
// Igual que reduce, pero de derecha a izquierda

arr.every((el) => el > 0)
// Verifica si todos los elementos cumplen una condición (true/false)

arr.some((el) => el > 4)
// Verifica si **al menos uno** cumple la condición (true/false)

arr.find((el) => el > 3)
// Devuelve el **primer elemento** que cumpla la condición

arr.findIndex((el) => el > 3)
// Devuelve el índice del primer elemento que cumple la condición

arr.flat()
// Aplana un array de arrays 1 nivel

arr.flatMap((el) => [el * 2])
// Como map + flat(1), transforma y aplana al mismo tiempo

// Búsqueda
arr.includes(3)
// Verifica si el array contiene un valor específico

arr.indexOf(3)
// Devuelve el índice de la **primera ocurrencia** del valor

arr.lastIndexOf(3)
// Devuelve el índice de la **última ocurrencia** del valor

// Modificación (¡mutan el array!)--------------------------------------
arr.push(6)
// Añade un elemento al final

arr.pop()
// Elimina el último elemento

arr.unshift(0)
// Añade un elemento al inicio

arr.shift()
// Elimina el primer elemento

arr.splice(2, 1)
// Elimina o reemplaza elementos (desde índice 2, 1 elemento)

arr.reverse()
// Invierte el orden del array

arr.sort((a, b) => a - b)
// Ordena el array (cuidado, por defecto es alfabético)

arr.fill(0, 1, 4)
// Rellena con un valor desde el índice 1 al 3

arr.copyWithin(0, 3)
// Copia parte del array en otra posición (sobrescribe)

// Extracción (no mutan)--------------------------------------
arr.slice(1, 4)
// Devuelve una copia desde el índice 1 hasta el 3
;[...arr]
// Copia el array con el operador spread

// Conversión--------------------------------------
arr.join(', ')
// Une los elementos en un string, separados por lo que definas

Array.from('Hola')
// Crea un array a partir de un iterable

Array.of(1, 2, 3)
// Crea un array con los valores dados

arr.toString()
// Convierte el array a string, separado por comas

JSON.stringify(arr)
// Convierte el array a JSON (string)

// Longitud
arr.length
// Cantidad de elementos en el array

// Iteradores--------------------------------------
arr.entries()
// Devuelve un iterador con pares [índice, valor]

arr.keys()
// Devuelve un iterador con los índices

arr.values()
// Devuelve un iterador con los valores

// Acceso--------------------------------------
arr.at(-1)
// Accede al elemento en una posición (permite negativos)

// ¡Extra!--------------------------------------
Array.isArray(arr)
// Verifica si una variable es un array (true/false)

const nuevoArray = new Array(200).fill(null)
//Creamos un nuevo array con 200 posiciones, cada posicion sera null
