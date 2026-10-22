"use strict";

// Parte 1: mini calculadora
const a = Number(prompt("Primer número:"));
const b = Number(prompt("Segundo número:"));

alert(
  `Suma: ${a + b}\n` +
  `Resta: ${a - b}\n` +
  `Multiplicación: ${a * b}\n` +
  `División: ${a / b}\n` +
  `Resto: ${a % b}\n` +
  `Potencia: ${a ** b}`
);

// Parte 2: incremento y decremento
let counter = 5;

alert(counter++); // Muestra 5: el sufijo devuelve el valor y DESPUÉS incrementa (counter pasa a 6)
alert(++counter); // Muestra 7: el prefijo incrementa PRIMERO y luego devuelve el valor
alert(counter--); // Muestra 7: devuelve el valor y después decrementa (counter pasa a 6)
alert(--counter); // Muestra 5: decrementa primero y luego devuelve el valor

// Asignaciones compuestas
counter += 10; // counter = counter + 10 → 15
counter *= 2;  // counter = counter * 2 → 30
alert(`Valor final de counter: ${counter}`);