"use strict";

const playlist = [
  ["Bohemian Rhapsody", "Queen", 354, "Rock"],
  ["Hotel California", "Eagles", 391, "Rock"],
  ["Imagine", "John Lennon", 183, "Pop"]
];

// Función auxiliar para mostrar una playlist como lista HTML
function mostrarPlaylist(lista) {
  let html = "<ul>";
  for (const fila of lista) {
    html += `<li>${fila.join(" | ")}</li>`;
  }
  return html + "</ul>";
}

// ---------- PARTE 1: push y pop ----------
// 1. Añado dos canciones al final
playlist.push(
  ["Billie Jean", "Michael Jackson", 294, "Pop"],
  ["Back in Black", "AC/DC", 255, "Rock"]
);

// 2. Elimino la última y guardo la fila eliminada
const cancionEliminada = playlist.pop();

// 3. Añado un quinto dato (año) a la primera canción
playlist[0].push(1975);

// 4. Muestro resultados
document.write("<h2>Parte 1: push y pop</h2>");
document.write(`<p>Canción eliminada: ${cancionEliminada[0]}</p>`);
document.write(mostrarPlaylist(playlist));

// ---------- PARTE 2: splice ----------
// 5. Inserto en la posición 1 sin eliminar nada (deleteCount = 0)
playlist.splice(1, 0, ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]);

// 6. Elimino la fila de la posición 2 (splice devuelve un array, cojo el elemento [0])
const cancionQuitada = playlist.splice(2, 1)[0];

// 7. Sustituyo la canción de la posición 0 por otra
playlist.splice(0, 1, ["Thunderstruck", "AC/DC", 292, "Rock"]);

// 8. Muestro resultados
document.write("<h2>Parte 2: splice</h2>");
document.write(`<p>Canción eliminada: ${cancionQuitada.join(" | ")}</p>`);
document.write(mostrarPlaylist(playlist));

// ---------- PARTE 3: spread y copias ----------
// 9. Copia con spread: es una copia SUPERFICIAL
const copia = [...playlist];
copia[0][0] = "TÍTULO MODIFICADO";
// El título de la playlist original también cambia. Spread solo copia el array
// exterior, pero las filas (arrays internos) son referencias a los mismos
// objetos en memoria, así que copia[0] y playlist[0] son el mismo array.
document.write("<h2>Parte 3: copias</h2>");
document.write(`<p>Copia superficial → título original: ${playlist[0][0]}</p>`);

// 10. Copia independiente: map con spread crea un array nuevo para cada fila
const copiaIndependiente = playlist.map(fila => [...fila]);
copiaIndependiente[0][0] = "OTRO TÍTULO";
// Aquí el original NO cambia, porque cada fila de la copia es un array distinto
document.write(`<p>Copia independiente → título original: ${playlist[0][0]}</p>`);
document.write(`<p>Título en la copia independiente: ${copiaIndependiente[0][0]}</p>`);