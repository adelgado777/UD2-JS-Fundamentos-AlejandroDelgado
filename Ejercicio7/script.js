"use strict";

const comparaciones = [
  ["2 > 1", 2 > 1],                            // true: comparación numérica normal
  ["'2' > 1", "2" > 1],                        // true: el string "2" se convierte al número 2
  ["'01' == 1", "01" == 1],                    // true: "01" se convierte al número 1
  ["0 == false", 0 == false],                  // true: false se convierte a 0
  ["'' == false", "" == false],                // true: "" se convierte a 0 y false también
  ["0 === false", 0 === false],                // false: igualdad estricta, tipos distintos (number y boolean)
  ["null == undefined", null == undefined],    // true: regla especial de ==, solo se igualan entre sí
  ["null === undefined", null === undefined],  // false: son de tipos distintos
  ["null > 0", null > 0],                      // false: null se convierte a 0 y 0 > 0 es false
  ["null >= 0", null >= 0],                    // true: null se convierte a 0 y 0 >= 0 es true
  ["null == 0", null == 0],                    // false: == no convierte null a 0 (solo es igual a undefined)
  ["undefined == 0", undefined == 0],          // false: undefined solo es igual a null y a undefined
  ["'Glow' > 'Glee'", "Glow" > "Glee"]         // true: se compara letra a letra; 'o' va después de 'e'
];

document.write("<ul>");
for (const [expresion, resultado] of comparaciones) {
  document.write(`<li>${expresion.replace(/</g, "&lt;").replace(/>/g, "&gt;")} → ${resultado}</li>`);
  console.log(expresion, resultado);
}
document.write("</ul>");