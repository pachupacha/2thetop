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

let nombre = "Javier Gerardo";
let apellido = "Milei";
let saludo = new String(`Hi! my name is Javier Gerardo Milei`);
console.log(saludo);
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
  lorem.includes("Milei"),
  lorem.trim()
);

//Receta del chef para convertir un String en Array, y viceversa.

console.log(lorem.split(" ").reverse().join(" "));

//CONCATENACIÓN & INTERPOLACIÓN DE VARIABLES

let nombre2 = "Juan Domingo";
let apellido2 = "Perón";

//Concatenación
//DEPRECATED********************
let saludo2 = "Hola mi nombre es " + nombre2 + " " + apellido2 + ".";

console.log(saludo);
//DEPRECATED********************

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

const aa = [];
const bb = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(aa);
console.log(bb);
console.log(bb.length);
console.log(bb[2]);
console.log(bb[0]);
console.log(bb[3]);
console.log(bb[3][2]);
console.log(bb[3][3][0]);

const cc = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(cc);

const dd = Array(100).fill(false);
console.log(dd);

//Inicializar un nuevo array desde el constructor con el operador new
//DEPRECATED********************
const ee = new Array();
console.log(ee);

const ff = new Array(1, 2, 3, true, false);
console.log(ff);
//DEPRECATED********************

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

//Objects
//'Todo es un objeto' - jonMirCha
//____________________________________
//llamar a un objeto con la variable new desde el prototipo global del mismo
//DEPRECATED********************
const ccc = new Object();
console.log(ccc);

let aaa = new String("Hola");
console.log(aaa);
//DEPRECATED********************

const bbb = {};
console.log(bbb);

//dentro de un objeto a las varaibles se le van a llamar 'atributos/propiedades', y a las funciones se le van a llamar 'métodos'.

const jgm = {
  nombre: "Javier Gerardo",
  apellido: "Milei",
  edad: 53,
  pasatiempos: ["Correr", "Rock'n Roll", "Pasear Perros"],
  soltero: true,
  contacto: {
    email: "elleon@gmail.com",
    twitter: "@JMilei",
    telefono: "1151254587",
  },
  saludar: function () {
    console.log(`Hola, señor presidente`);
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Me puedes seguir en ${this.contacto.twitter} en Twitter. VLLC.`
    );
  },
};

console.log(jgm);

//DEPRECATED********************
console.log(jgm["nombre"]);
console.log(jgm["apellido"]);
//DEPRECATED********************
console.log(jgm.nombre, apellido);
console.log(jgm.edad);
console.log(jgm.soltero);
console.log(jgm.pasatiempos);
console.log(jgm.pasatiempos[2]);
console.log(jgm.contacto);
console.log(jgm.contacto.twitter);
jgm.saludar();
jgm.decirMiNombre();

//Object Methods

console.log(Object.keys(jgm));
console.log(Object.values(jgm));
console.log(
  jgm.hasOwnProperty("nombre", "apellido", "telefono", "pasatiempos"["Correr"])
);
console.log(Object.hasOwnProperty("nacimiento"));

//Tipos de Operadores
//ARITMÉTICOS
// suma + ; resta - ; mulplicación * ; módulo % ; agrupación () //

let aaaa = 5 + (5 - 10) * 6;
console.log(aaaa);
let modulo = 5 % 2;
console.log(modulo);

//RELACIONALES
//mayor > ; menor < ; mayor o igual >= ; menor o igual <= ; doble igual == ; triple igual === ; diferente != ; superdiferente !== //

console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 > 7);
console.log(7 >= 7);
//
// = 1 igual es asignación de variable.

// == 2 iguales es comparación de valores.
//DEPRECATED********************
console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);
//DEPRECATED********************

// === 3 iguales es comparación de tipo de dato y valor.
console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

//OPERADORES INCREMENTO & DECREMENTO
let i = 1;
i = i + 2;
i += 3;
i *= 3;
i /= 2;
i -= 3;
console.log(i);

//OPERADOR UNARIO
//primero imprime el valor, luego adiciona/resta 1.
i++;
i--;
//primero adiciona/resta 1, luego imprime el valor. updatea el i++ o i-- anterior.
++i;
--i;
console.log(i++);

// //OPERADORES LÓGICOS
// // Not  ! : Niega, es decir, lo que es verdadero lo vuelve falso y vic.
console.log(!true);
console.log(!false);

// // Or  || : Cuando tengo 2 o más condiciones , con que solo una sea verdadera, el OR validará.
console.log(9 === 9 || "9" === 9);

// And && : Cuando tengo 2 o más condiciones, con que una sea verdadera, el AND validará.
console.log(9 === 9 && "9" === 9);
console.log(9 === 9 && "9" === "9");

//ESTRUCTURAS CONDICIONALES
//if - else

let edad = 17;
if (edad > 17) {
  console.log("Eres mayor de Edad");
} else {
  console.log("Eres menor de Edad");
}
//
if (Number.isInteger(edad)) {
  console.log("Edad registrada correctamente: " + edad);
} else {
  console.log("Error: La edad no puede ser un número decimal.");
}
//
if (edad >= 18) {
  console.log(`Eres mayor de Edad`);
} else {
  console.log(`Eres menor de Edad`);
}

//if - else - if else

// Dejame dormir 0hrs - 5hrs
// Buenos dias 6hrs - 11hrs
// Buenas tardes 12hrs - 18hrs
// Buenas noches 19hrs - 23hrs

let hora = 2;
if (hora >= 0 && hora <= 5) {
  console.log("Dejame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

if (hora > 0 && hora < 6) {
  console.log("Dejame dormir");
} else if (hora > 5 && hora < 12) {
  console.log("Buenos dias");
} else if (hora > 11 && hora < 19) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

//OPERADOR TERNARIO (condición)?verdadero:falso
console.log("Operador Ternario");
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

// switch-case
//D0 ; L1 ; M2 ; X3 ; J4 ; V5 ; S6
let dia = 7;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("El día no existe");
    break;
}

//LOOPS
let contador = 0;
while (contador < 10) {
  console.log("while" + contador);
  contador++;
}
do {
  console.log("do while" + contador);
} while (contador < 10);

//for (inicialización de variable; condición; decremento o incremento){
//   sentencias que ejecuta el for
//   sentencias que ejecuta el for
//   sentencias que ejecuta el for
// }

for (let index = 0; index < 10; index++) {
  console.log("for " + index);
}
console.clear();
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index]);
}

//for in, exclusivo para {objects}

const jon = {
  nombre: "Jon",
  apellido: "MirCha",
  edad: 35,
};

for (const propiedad in jon) {
  console.log(`Key: ${propiedad}, ${jon[propiedad]}`);
}

//for of, recorre todos los elementos de cualquier objeto que sea iterable en javaScript.

for(const elemento of numeros){
  console.log(elemento)

}

let cadena = "Viva la libertad, carajo";

for(const caracter of cadena){
  console.log(caracter)
}



