"use strict";

// ================= VERSIÓN CON Date =================
{
  document.write("<h2>Con Date</h2>");

  const hoy = new Date();
  const diaHoy = hoy.getDate();
  const diasDelMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
  const diaMaximo = Math.min(30, diasDelMes);

  if (diaHoy > diaMaximo) {
    document.write("<p>Hoy ya no quedan días posibles este mes para el evento.</p>");
  } else {
    // Repito hasta que el día aleatorio no sea anterior al día actual
    let diaEvento;
    do {
      diaEvento = Math.floor(Math.random() * diaMaximo) + 1;
    } while (diaEvento < diaHoy);

    // Fechas a medianoche para que la resta salga en días exactos
    const hoyMedianoche = new Date(hoy.getFullYear(), hoy.getMonth(), diaHoy);
    const fechaEvento = new Date(hoy.getFullYear(), hoy.getMonth(), diaEvento);
    const dias = Math.round((fechaEvento - hoyMedianoche) / (1000 * 60 * 60 * 24));

    const formato = { day: "numeric", month: "long", year: "numeric" };
    document.write(`
      <p>La fecha actual es ${hoyMedianoche.toLocaleDateString("es-ES", formato)}</p>
      <p>La fecha del evento: ${fechaEvento.toLocaleDateString("es-ES", formato)}</p>
      <p>Días que faltan para el evento: ${dias} ${dias === 1 ? "día" : "días"}</p>
    `);
  }
}

// ================= VERSIÓN CON Temporal =================
{
  document.write("<h2>Con Temporal</h2>");

  // Nativa si el navegador la tiene; si no, la del polyfill
  const T = globalThis.Temporal ?? globalThis.temporal?.Temporal;

  if (!T) {
    document.write("<p>Temporal no está disponible en este navegador.</p>");
  } else {
    const hoy = T.Now.plainDateISO();
    const diaMaximo = Math.min(30, hoy.daysInMonth);

    if (hoy.day > diaMaximo) {
      document.write("<p>Hoy ya no quedan días posibles este mes para el evento.</p>");
    } else {
      let diaEvento;
      do {
        diaEvento = Math.floor(Math.random() * diaMaximo) + 1;
      } while (diaEvento < hoy.day);

      const fechaEvento = hoy.with({ day: diaEvento });
      const dias = hoy.until(fechaEvento, { largestUnit: "day" }).days;

      const formato = { day: "numeric", month: "long", year: "numeric" };
      document.write(`
        <p>La fecha actual es ${hoy.toLocaleString("es-ES", formato)}</p>
        <p>La fecha del evento: ${fechaEvento.toLocaleString("es-ES", formato)}</p>
        <p>Días que faltan para el evento: ${dias} ${dias === 1 ? "día" : "días"}</p>
      `);
    }
  }
}