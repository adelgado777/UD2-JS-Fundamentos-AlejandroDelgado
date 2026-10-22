"use strict";

let opcion;

// Bucle do...while del menú: se ejecuta al menos una vez y se repite hasta elegir Salir
do {
  opcion = prompt(
    "MENÚ\n1 - Tabla de multiplicar\n2 - Sumar números\n3 - Números impares del 1 al 20\n4 - Cuenta atrás\n0 - Salir"
  );

  // Si el usuario cancela, lo trato como Salir
  if (opcion === null) {
    opcion = "0";
  }

  switch (opcion.trim()) {
    case "1": {
      // Bucle for: tabla de multiplicar
      const numero = Number(prompt("¿De qué número quieres la tabla?"));
      let tabla = "";
      for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
      }
      alert(tabla);
      break;
    }
    case "2": {
      // Bucle while(true) con break: suma hasta entrada vacía o cancelar
      let suma = 0;
      while (true) {
        const entrada = prompt("Introduce un número (vacío o Cancelar para terminar):");
        if (entrada === null || entrada.trim() === "") {
          break;
        }
        const numero = Number(entrada);
        if (isNaN(numero)) {
          alert("Eso no es un número, se ignora.");
          continue;
        }
        suma += numero;
      }
      alert(`La suma total es ${suma}`);
      break;
    }
    case "3": {
      // Bucle for con continue: salto los pares
      let impares = "";
      for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
          continue;
        }
        impares += `${i} `;
      }
      alert(`Impares del 1 al 20: ${impares}`);
      break;
    }
    case "4": {
      // Bucle do...while: cuenta atrás hasta 0
      let contador = Number(prompt("¿Desde qué número quieres contar atrás?"));
      if (isNaN(contador) || contador < 0) {
        alert("Introduce un número válido mayor o igual que 0.");
      } else {
        let cuenta = "";
        do {
          cuenta += `${contador} `;
          contador--;
        } while (contador >= 0);
        alert(cuenta);
      }
      break;
    }
    case "0":
      alert("¡Hasta pronto!");
      break;
    default:
      alert("Opción no válida");
  }
} while (opcion.trim() !== "0");