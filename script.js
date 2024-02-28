let textChain = "Hola, ¿Cómo estás?"; /*String*/
let numberXd = 35980700; /*Number*/
let booleanXd = true; /*Boolean*/
let nothing = null; /*Null*/
let notDefined; /*Undefined*/
const dni = 40246931; /*Constant*/

//1.Concepto de "Scope" ó "Ámbito de Bloque"

let pachu = "Fernandito";
if (true) {
  let pachu = "Fernandito";
  pachu = "Soficita";
  console.log(pachu);
}
console.log(pachu);
//___________________________________________

//2.Método de Consola .table sobre una array

const theWeekndSongs = [
  { title: "Blinding Lights", album: "After Hours", year: 2020 },
  { title: "Starboy", album: "Starboy", year: 2016 },
  {
    title: "Can't Feel My Face",
    album: "Beauty Behind the Madness",
    year: 2015,
  },
];

console.log(theWeekndSongs);
console.table(theWeekndSongs);

console.log(console);
console.log(window.document);

//3. Discriminar carácteres en una string:

const intro1 = "pepito pepón";
const intro2 = new String("pepita pepón");
console.log(intro1[0]);
console.log(intro2);

// Cadenas de texto a.k.a. "strings":

let nombre = "Juan Domingo";
let apellido = "Perón";
let saludo = new String("Hi! my name is Juan Domingo");
let lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eius sit natus dolor accusamus nam vel, unde reiciendis odio praesentium voluptatem adipisci temporibus tempora atque, facere suscipit amet consequuntur ea.";
console.log(nombre, apellido);
console.log(saludo.length);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes("cha"),
  lorem.includes("Perón"),
  lorem.trim()
);

//Receta del chef para convertir un String en Array, y viceversa.

console.log(lorem.split(" ").reverse().join(" "));

//CONCATENACIÓN & INTERPOLACIÓN DE VARIABLES

let nombre2 = "Juan Domingo";
let apellido2 = "Perón";

//Concatenación

let saludo2 = "Hola mi nombre es " + nombre2 + " " + apellido2 + ".";

console.log(saludo);

//Interpolación de Variables
//Template String
let saludo3 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo3);

//NUMBERS

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "7.98";

console.log(a, b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));

//Boolean

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

//Truthy
if (true);
if ({});
if ([]);
if ("foo");
if (new Date());
if (-42);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);

//Falsy
if (false)
  if (null)
    if (undefined)
      if (0) if (NaN) if (``) if ("") if ("") if (document.all) [1];

//undefined, Null y NaN

let indefinida;
console.log(indefinida);

let nulo = null;
console.log(nulo);

let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);

//Functions
//Función declarada

function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

//Declaración de función
estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
  console.log("Uno");
  return 19;
  console.log("Dos");
  console.log("Tres");
  return "La función ha retornado una Cadena de Texto";
}
console.log(unaFuncionQueDevuelveValor());

let valorDeFuncion = unaFuncionQueDevuelveValor();

console.log(valorDeFuncion);

//Placeholder//
function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Bonnie", 7);
saludar();

//Funciones Declaradas vs. Funciones Expresadas:

funcionDeclarada();
function funcionDeclarada() {
  console.log(
    "Esto es una función declarada. Puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada"
  );
}

//Función Expresada

//Función anónima

const funcionExpresada = function () {
  console.log(
    "Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición, JS nos dirá `Cannot access 'funcionExpresada' before initialization` "
  );
};

funcionExpresada();

//Pequeño adelanto a arrowFunction =>
//1.Sintanxis más simple
//2.return sobre la misma linea de código implicito en la función
//3.se saltea el contexto actual y actua sobre el contexto "padre".

const funcionFlecha = () => {
  console.log("Esta es la función Flecha");
};

funcionFlecha();

//Contexto dinámico this//

this.mundo = "Mundo 1 ";

const objetoConFuncionNormal = {
  mundo: "Mundo 2 ",
  imprimir() {
    console.log(this.mundo);
  },
};

objetoConFuncionNormal.imprimir();

const objetoConFuncionFlecha = {
  mundo: "Mundo 3 ",
  imprimir: () => {
    console.log(this.mundo);
  },
};
objetoConFuncionFlecha.imprimir();

//Adelanto de call, apply & bind

const user = {
  name: "Marcos",
};

const business = {
  name: "Headbook",
};

function showInfo(likes, friends) {
  return `${this.name} tiene ${likes} y ${friends}`;
}

//call refiere al objeto que se determine dentro de los parámetros

console.log(showInfo.call(business, 4, 8));

//apply es similar, pero los parámetros deben estar dentro de una array

console.log(showInfo.apply(user, [6, 9]));

//bind esta regresa una función después de haber asociado el contexto en particular.

const newFunction = showInfo.bind(user);

console.log(newFunction(10, 15));

//Arrays
console.clear();

const e = [];
const g = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(e);
console.log(g);
console.log(g.length);
console.log(g[2]);
console.log(g[0]);
console.log(g[3]);
console.log(g[3][2]);
console.log(g[3][3][0]);

const h = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(h);

const i = Array(100).fill(false);
console.log(i);

//Inicializar un nuevo array desde el constructor con el operador new [DEPRECATED]
const j = new Array();
console.log(j);

const k = new Array(1, 2, 3, true, false);
console.log(k);

//array Methods

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

//.push añade un elemento a la array
colores.push("Negro");
console.log(colores);

//.pop quita el último elemento
colores.pop();
console.log(colores);

//.forEach ejecuta una función determinada por cada elemento en la array, y en orden, para poder iterar correctamente dichos elementos.

colores.forEach(function (el, index) {
  console.log(`<li id="${index}> ${el}</li>`);
});
