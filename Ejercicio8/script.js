"use strict";

const entrada = prompt("Introduce una nota (0-10):");

// Compruebo cancelar (null) y cadena vacía antes de convertir,
// porque Number("") da 0 y pasaría la validación sin querer
if (entrada === null || entrada.trim() === "") {
  alert("Error: no has introducido ninguna nota.");
} else {
  const nota = Number(entrada.replace(",", "."));

  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Error: la nota debe ser un número entre 0 y 10.");
  } else {
    if (nota < 5) {
      alert("Suspenso");
    } else if (nota < 7) {
      alert("Aprobado");
    } else if (nota < 9) {
      alert("Notable");
    } else {
      alert("Sobresaliente");
    }

    // Versión original con if/else (comentada):
    // let aprobado;
    // if (nota >= 5) {
    //   aprobado = "Sí";
    // } else {
    //   aprobado = "No";
    // }

    // Reescrita con el operador ternario:
    const aprobado = nota >= 5 ? "Sí" : "No";
    console.log(`¿Aprobado? ${aprobado}`);
  }
}