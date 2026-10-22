"use strict";

const nombre = prompt("Nombre:");
const apodo = prompt("Apodo:");
const edad = Number(prompt("Edad:"));

// 1. || devuelve el primer valor truthy. Si el usuario deja el campo vacío ("")
// o cancela (null), el valor es falsy y se salta al siguiente
const nombreMostrado = nombre || apodo || "Anónimo";
alert(`Te mostraremos como: ${nombreMostrado}`);

// 2. && solo continúa si todo lo anterior es truthy
if (edad >= 18 && (nombre || apodo)) {
  alert("Acceso permitido");
}

// 3. Diferencia entre || y ??
const altura = 0;
alert(`altura || 170 → ${altura || 170}\naltura ?? 170 → ${altura ?? 170}`);
// || trata el 0 como falsy y lo sustituye por 170 (resultado: 170).
// ?? solo sustituye si el valor es null o undefined, y 0 es un valor válido
// (resultado: 0). Por eso ?? es mejor cuando 0 o "" son datos legítimos.

// 4. !! convierte cualquier valor a booleano
const tieneNombre = !!nombre;
alert(`¿Se ha introducido un nombre? ${tieneNombre}`);