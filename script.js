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

//console.log(lorem.split(" ").reverse().join(" "));

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

// // // // //

const resultado = sumar(2, 3, 102, 123, 11111111, 1, "xD");
console.log(resultado);

const carniceria = ["Bife", "Chorizos", "Vacio", "Mollejas"];
const verduleria = ["Papas", "Batatas", "Sandias", "Zanahorias"];

const recorrerArray = function (arreglo) {
	for (let i = 0; i < arreglo.length; i++) {
		console.log(arreglo[i]);
	}
};
recorrerArray(carniceria);
recorrerArray(verduleria);

const carnes = carniceria.forEach(function (producto, index) {
	console.log(`stock de ${producto} disponible`);
});
console.warn(carnes);
const recorrerArrayPRO = function (arreglo) {
	arreglo.forEach(function (producto) {
		console.log(producto);
	});
};

recorrerArrayPRO(verduleria);
recorrerArrayPRO(carniceria);

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

for (const elemento of numeros) {
	console.log(elemento);
}

let cadena = "Viva la libertad, carajo";

for (const caracter of cadena) {
	console.log(caracter);
}

//Manejo de Errores try-catch-finally

try {
	console.log("En el Try se agrega el código a evaluar");
	noExiste;
	console.log("Segundo mensaje en el try");
} catch (error) {
	console.log("Catch, captura cualquier error surgido o lanzado en el try");
	console.log(error);
} finally {
	console.log(
		"El bloque finally se ejecutará siempre al final de un bloque try-catch"
	);
}

try {
	let numero = "MCXXIDCD";
	if (isNaN(numero)) {
		throw new Error("El caractér introducido no es un Número");
	}
	console.log(numero * numero);
} catch (error) {
	console.log(`Se produjo el siguiente error: ${error}`);
}

//break & continue

const numerosA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < numerosA.length; i++) {
	if (i === 5) {
		break;
	}
	console.log(numerosA[i]);
}

for (let i = 0; i < numerosA.length; i++) {
	if (i === 5) {
		continue;
	}
	console.log(numerosA[i]);
}

//destructuring

//sin destructuración
const numerosB = [1, 2, 3];
let uno = numerosB[0];
dos = numerosB[1];
tres = numerosB[2];

console.log(uno, dos, tres);

//con destructuración

const [one, two, three] = numerosB;
console.log(one, two, three);

const persona = {
	nombreA: "Javier Gerardo",
	apellidoA: "Milei",
	edadA: 53,
};

let { nombreA, apellidoA, edadA } = persona;
console.log(persona);

//Objetos literales
let nombreB = "Bonnie";
edadB = 7;

const perro = {
	nombreB: nombreB,
	edadB: edadB,
	ladrar: function () {
		console.log("awa awa!!");
	},
};
console.log(perro);
perro.ladrar();

const dog = {
	nombreB,
	edadB,
	raza: "Caniche",
	ladrar() {
		console.log("guau guau!!");
	},
};
console.log(dog);
dog.ladrar();

// Parámetros REST & Operador Spread

//Rest Operator: Es para transformar un parámetro en una [Array], y de esa forma, iterarlo.
function sumar(a, b, ...c) {
	let resultante = a + b;
	c.forEach(function (numero) {
		resultante += numero;
	});
	return resultante;
}

//Spread Operator: Para concatenar (pegar) [Arrays].
const resultado1 = sumar(5, 6, 4, 7);
console.log(resultado1);

const arr1 = [1, 2, 3, 4, 5],
	arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//Arrow Functions =>
//1.Sintanxis más simple
//2.return sobre la misma linea de código implicito en la función
//3.se saltea el contexto actual y actua sobre el contexto "padre".

//Cuando una función tiene un solo parámetro, no lleva ()

const saludoA = nombreC => console.log(`Hola ${nombreC}`);
saludoA("Irma");

//Función Anónima clásica:

const sumarA = function (a, b) {
	return a + b;
};
console.log(sumarA(5, 1));

//Cuando una función tiene un solo parámetro, no lleva (), pero cuando la función tiene más de un parámetro, o no tiene parámetros, debe ir con ()

const sumarB = (a, b) => a + b;
console.log(sumarB(7, 2));

//Si la función tiene varias lineas de código, hay que respetar el cuerpo de la función.

const fucnionDeVariasLineas = () => {
	console.log("Uno");
	console.log("Dos");
	console.log("Tres");
};

fucnionDeVariasLineas();

const numerosC = [1, 2, 3, 4, 5];

numerosC.forEach((el, index) =>
	console.log(`El elemento ${el} está en la posición ${index}`)
);

//Para la declaración de methods dentro de objetos literales se debe obviar el uso de =>, ya que como se explicó, las => se saltean el contexto en el que se encuentran.

function Perro() {
	console.log(this);
}
Perro();

const perroA = {
	nombre: "Bonnie",
	ladrar() {
		console.log(this);
	},
};
perroA.ladrar();

//Prototipos
//POO
//1.Clases - Modelo a Seguir. Esquema de donde basarnos y generar instancias.
//2.Objetos - Instancia de una clase, Una copia de ese "modelo" el cual estamos utilizando.
///2.1.Atributos - Caracteristica o propiedad del Objeto. (Variables dentro de un objeto).
///2.2.Métodos - Acciones que un objeto puede realizar. (Funciones dentro de un objeto).

const animal = {
	nombre: "Snoopy",
	sonar() {
		console.log("Hago sonidos porque estoy vivo");
	},
};

const animal2 = {
	nombre: "Bonnie",
	sonar() {
		console.log("Hago sonidos porque estoy viva");
	},
};

console.log(animal);
console.log(animal2);

//Función constructora
function Animal(nombre, genero) {
	//Atributos
	this.nombre = nombre;
	this.genero = genero;
	//Métodos
	this.sonar = function () {
		console.log(`Soy ${this.nombre} y hago ruiditos porque estoy vivo`);
	};
	this.saludar = function () {
		console.log(`Hola, me llamo ${this.nombre} y soy ${this.genero}`);
	};
}

const snoopy = new Animal("Snoopy", "Macho"),
	bonnie = new Animal("Bonnie", "Hembra");

console.log(snoopy);
console.log(bonnie);

snoopy.sonar();
bonnie.saludar();

//Función constructora donde asignamos los métodos al prototipo, no a la función como tal.
function Animal2(nombre, genero) {
	//Atributos
	this.nombre = nombre;
	this.genero = genero;
}
//Métodos agregados al prototipo de la función constructora
Animal2.prototype.sonar = function () {
	console.log(`Soy ${this.nombre} y hago ruiditos porque estoy vivo`);
};
Animal2.prototype.saludar = function () {
	console.log(`Hola, me llamo ${this.nombre} y soy ${this.genero}`);
};

const snoopy2 = new Animal2("Snoopy", "Macho"),
	bonnie2 = new Animal2("Bonnie", "Hembra");

console.log(snoopy2);
console.log(bonnie2);

snoopy2.sonar();
bonnie2.saludar();

//Herencia prototípica

function Perro(nombre, genero, tamanio) {
	this.super = Animal2;
	this.super(nombre, genero);
	this.tamanio = tamanio;
}
// `Perro` hereda los parámetros de `Animal2`
Perro.prototype = new Animal2();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo..
Perro.prototype.sonar = function () {
	console.log(`Soy un perro, y mi sonido es un ladrido`);
};

Perro.prototype.ladrar = function () {
	console.log("Guau Guau");
};

const snoopy3 = new Perro("Snoopy", "Macho", "Mediano"),
	bonnie3 = new Animal2("Bonnie", "Hembra");

console.log(snoopy3);
console.log(bonnie3);

snoopy3.sonar();
snoopy3.saludar();
snoopy3.ladrar();

//Clases y Herencias, Métodos Estáticos, getters y setters

class Animal3 {
	constructor(nombre, genero) {
		this.nombre = nombre;
		this.genero = genero;
	}
	//Métodos
	sonar() {
		console.log(`Soy ${this.nombre} y hago ruiditos porque estoy con vida`);
	}
	saludar() {
		console.log(`Hola, me llamo ${this.nombre} y soy ${this.genero}`);
	}
}
class Perro2 extends Animal3 {
	constructor(nombre, genero, tamanio) {
		//con el método super() se manda a llamar el constructor de la clase padre
		super(nombre, genero);
		this.tamanio = tamanio;
		this.raza = null;
	}

	sonar() {
		console.log("Soy un perro y ladraré");
	}

	ladrar() {
		console.log("Guau Guau!!");
	}
	//Método estático: Se pueden utilizar sin necesidad de instanciar la clase, es decir, llamando al constructor `Perro2` directamente:
	static queEres() {
		console.log("Los perros somos los mejores amigos del hombre");
	}
	//Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.
	get getRaza() {
		return this.raza;
	}

	set setRaza(raza) {
		this.raza = raza;
	}
}

const minnie = new Animal3("Minnie", "Hembra"),
	scooby = new Perro2("Scooby", "Macho", "Gigante");

console.log(minnie);
console.log(scooby);
minnie.saludar();
minnie.sonar();
scooby.saludar();
scooby.sonar();
scooby.ladrar();
Perro2.queEres();
scooby.setRaza = "Gran Danés";
console.log(scooby.getRaza);

console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");

let nombreC = "Jon";
apellidoC = "MirCha";
edadC = 35;

console.log(nombreC);
console.log(apellidoC);
console.log(edadC);
console.log(nombre, apellido, edad);
console.log(
	`Hola mi noimbre es ${nombreC} ${apellidoC} y tengo ${edadC} años.`
);

console.log(
	`Hola mi nombre es %s %s y tengo %d años.`,
	nombreC,
	apellidoC,
	edadC
);
console.log(window);
console.log(document);
console.log(console);
console.dir(window);
console.dir(document);
console.dir(console);
console.group("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();
console.table(Object.entries(console).sort());

const numerosD = [1, 2, 3, 4, 5],
	vocales = ["A", "E", "I", "O", "U"];

console.table(numerosD);
console.table(vocales);

const perroB = {
	nombre: "Bonnie",
	raza: "Caniche",
	colos: "Blanco",
};

console.table(perroB);

console.time(`¿Cuanto tiempo tarda mi código?`);
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
	arreglo[i] = i;
}

console.timeEnd(`¿Cuanto tiempo tarda mi código?`);

for (let i = 0; i <= 100; i++) {
	console.count("código for");
	console.log(i);
}

let x = 12;
y = 2;
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, (x, y, pruebaXY));

//Objeto Date

console.log(Date());

let fecha = new Date();
console.log(fecha);

//Día del mes
console.log(fecha.getDate());
//día de la semana D L M X J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());
//Mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
let cumpleJon = new Date(1984, 4, 23);
console.log(cumpleJon);

//Objeto Math

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.5));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.8));
console.log(Math.round(7.49));
console.log(Math.sqrt(81));
console.log(Math.pow(2, 5));
console.log(Math.sign(-0.3));
console.log(Math.random());
console.log(Math.round(Math.random() * 1000));

//Operadores de Cortocircuito

//Cortocircuito OR || - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto.

//Cortocircuito AND && - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto

function saludar(nombre) {
	nombre = nombre || "Desconocido";
	console.log(`Hola ${nombre}`);
}

saludar("Pachu");
saludar();

console.log("cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(0 && "Valor de la derecha");

// alert, confirm y prompt

// alert("Esto es una Alerta");
// confirm("Esto es una caja de confirmación");
// prompt("Hola esto es un aviso, y le permite al usuario ingresar un valor");

// let alerta = alert("Hola esto es una alerta"),
// confirmacion = confirm("Hola esto es una confirmación"),
// aviso = prompt(
// 	"Hola esto es un aviso, y le permite al usuario ingresar un valor"
// );

// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);

//Expresiones Regulares

//Son una secuencia de caracteres que forma un patrón de búsqueda, proncipalmente utilizada para el rastreo de patrones de cadenas de caracteres.

let cadenaA =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, preaesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";

// let expReg = new RegExp ("lorem", "ig")
// console.log(expReg.test(cadenaA))
// console.log(expReg.exec(cadenaA))

let expReg2 = /lorem/gi;
console.log(expReg2.test(cadenaA));
console.log(expReg2.exec(cadenaA));

console.clear();

//Funciones Anónimas Autoejecutables

(function () {
	console.log("Mi primer IIFE");
})();

(function (d, w, c) {
	console.log("Mi segunda IIFE");
	console.log(d);
	console.log(w);
	c.log("Este es un console.log");
})(document, window, console);

//Formas de escribir las funciones Anónimas Autoejecutables
//Clásica
(function () {
	console.log(`Versión Clásica`);
})();

//La "Crockford" (JavaScript The Good Parts)
((function (){
	console.log(`Versión Crockford`)
})());

//Unaria
+function (){
	console.log(`Versión Unaria`)
}();

//Facebook
!function (){
	console.log(`Versión Facebook`)
}();

//Módulos ( import / export )


