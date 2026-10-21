"use strict";

// prompt devuelve null si el usuario pulsa Cancelar
const nombre = prompt("¿Cómo te llamas?");

if (nombre === null) {
  alert("Has cancelado. No se puede continuar.");
} else {
  const ciudad = prompt("¿En qué ciudad vives?");

  if (ciudad === null) {
    alert("Has cancelado. No se puede continuar.");
  } else {
    const anioNacimiento = prompt("¿En qué año naciste?");

    if (anioNacimiento === null) {
      alert("Has cancelado. No se puede continuar.");
    } else {
      // Expresión dentro de la plantilla: año actual - año de nacimiento
      const anioActual = new Date().getFullYear();
      alert(`Bienvenido/a ${nombre} de ${ciudad}. Este año cumples ${anioActual - Number(anioNacimiento)} años.`);
    }
  }
}