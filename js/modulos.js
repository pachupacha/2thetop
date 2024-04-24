import saludar, {
	Saludar,
	PI,
	usuario,
	hello,
	password,
} from "./constantes.js";

import { aritmetica as calculos } from "./aritmetica.js";
console.log("Archivo Módulos.js");

console.log(PI);

console.log(usuario);

console.log(calculos.restar(3, 4));

console.log(hello);

saludar();

let saludo = new Saludar();
saludo;

console.log(password);
