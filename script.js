let textChain = "Hola, ¿Cómo estás?"; /*String*/
let numberXd = 35980700; /*Number*/
let booleanXd = true; /*Boolean*/
let nothing = null; /*Null*/
let notDefined; /*Undefined*/
const dni = 40246931; /*Constant*/

let pachu = "Fernandito";
if (true) {
  let pachu = "Fernandito";
  pachu = "Soficita";
  console.log(pachu);
}
console.log(pachu);

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

const intro1 = "pepito pepón";
const intro2 = new String("pepita pepón");
console.log(intro1[0]);
console.log(intro2);

// Cadenas de texto aka Strings
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
if (0) 
if (NaN) 
if (``) 
if ("") 
if ("") 
if (document.all) [1];

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

function saludar(nombre = "Desconocido", edad = 0) {
  //Placeholder//
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

console.clear()

const funcionFlecha = () => {
    
    console.log("Esta es la función Flecha")
    
}

funcionFlecha()

// THIS----------------------------------------------------//

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