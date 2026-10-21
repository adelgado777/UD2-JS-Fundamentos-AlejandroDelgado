"use strict";

// Parte 1: suma correcta frente a concatenación
const primero = prompt("Primer número:");
const segundo = prompt("Segundo número:");

if (primero === null || segundo === null) {
  document.write("<p>Has cancelado la entrada de números.</p>");
} else {
  // prompt siempre devuelve texto, así que convierto con Number()
  const sumaCorrecta = Number(primero) + Number(segundo);
  // Sin convertir, el + concatena los textos
  const concatenacion = primero + segundo;

  document.write(`<p>Suma correcta (números): ${sumaCorrecta}</p>`);
  document.write(`<p>Sin convertir (concatenación): ${concatenacion}</p>`);
}

// Parte 2: tabla de conversiones generada desde JS
const valores = ["123", " 45 ", "abc", "", "0", 0, null, undefined, true];

let tabla = "<table border='1'>";
tabla += "<tr><th>Valor</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr>";

for (const valor of valores) {
  // JSON.stringify muestra las comillas de los strings para distinguirlos
  tabla += `<tr>
    <td>${JSON.stringify(valor) ?? "undefined"}</td>
    <td>${Number(valor)}</td>
    <td>${String(valor)}</td>
    <td>${Boolean(valor)}</td>
  </tr>`;
}

tabla += "</table>";
document.write(tabla);

// Casos curiosos: Number("abc") es NaN, Number("") es 0,
// Number(" 45 ") es 45 (ignora espacios) y Boolean("0") es true
// (un string no vacío es truthy, aunque contenga un cero).