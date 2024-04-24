export const PI = Math.PI;

export let usuario = "Pachu";

let password = "qwerty";
export {password};

export const hello = () => console.log("Hello")

export default function saludar() {
	console.log("Hola Módulos +ES6");
}

export class Saludar {
	constructor() {
		console.log("Hola Class");
	}
}
