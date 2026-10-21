"use strict";

// Una variable de cada tipo
const numero = 42;
const grande = 1234567890123456789n;
const texto = "Hola";
const booleano = true;
const nulo = null;
let indefinido;
const simbolo = Symbol("id");
const objeto = { nombre: "Ana" };

// Pares [nombre, valor] para recorrerlos
const variables = [
  ["number", numero],
  ["bigint", grande],
  ["string", texto],
  ["boolean", booleano],
  ["null", nulo],
  ["undefined", indefinido],
  ["symbol", simbolo],
  ["object", objeto]
];

// Muestro valor y typeof de cada una en forma de lista
document.write("<ul>");
for (const [nombre, valor] of variables) {
  document.write(`<li>${nombre}: ${String(valor)} → typeof: ${typeof valor}</li>`);
}
document.write("</ul>");

// typeof null devuelve "object" por un error de la primera versión de
// JavaScript. Se mantiene por compatibilidad con código antiguo,
// pero null NO es realmente un objeto: es un valor primitivo.