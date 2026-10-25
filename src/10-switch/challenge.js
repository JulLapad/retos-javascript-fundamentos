// ============================================
// Reto: Switch en JavaScript
// ============================================
// Practica la estructura switch: case, break, default y agrupación de casos
// para comparar una misma expresión con varias opciones.
// Ejecuta los tests con: npx vitest src/10-switch
// ============================================

// --- Reto 1: Día laboral o fin de semana ---
// Recibe "dia" (string en minúsculas: "lunes", "martes", ..., "domingo").
// Retorna "día laboral" para lunes a viernes, "fin de semana" para sábado y domingo,
// "día no válido" para cualquier otro valor.
// Usa switch agrupando los casos que comparten la misma acción (sin repetir código).
function tipoDeDia(dia) {
  switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        return ('día laboral');
    case 'sabado':
    case 'domingo':
        return('fin de semana');
    default:
        return('día no válido');
  }
}

console.log(tipoDeDia('jueves')); // Día Laboral
console.log(tipoDeDia('sabado')); // Fin de semana
console.log(tipoDeDia('Who is json?')); // Día no válido

// --- Reto 2: Mensaje según opción ---
// Recibe "opcion" (string: "a", "b" o "c").
// Retorna "Opción A" si opcion === "a", "Opción B" si "b", "Opción C" si "c".
// Si no coincide con ninguno, retorna "opción no válida" (usa default).
// Usa switch con break en cada case para que no se ejecute el siguiente.
function mensajeOpcion(opcion) {
  // Tu código aquí
}

// --- Reto 3: Categoría por código ---
// Recibe "codigo" (string: "E1", "E2", "H1").
// Retorna "electrónica" para "E1" y "E2" (agrupa ambos case en un mismo resultado).
// Retorna "hogar" para "H1".
// Retorna "desconocido" para cualquier otro (default).
// Practica agrupar varios case que comparten la misma acción.
function categoriaPorCodigo(codigo) {
  // Tu código aquí
}

// --- Reto 4: Días del mes ---
// Recibe "mes" (número del 1 al 12).
// Retorna el número de días del mes: 31 para ene, mar, may, jul, ago, oct, dic;
// 30 para abr, jun, sep, nov; 28 para feb.
// Retorna 0 si el mes no es válido (default).
// Usa switch agrupando los meses que tienen los mismos días.
function diasDelMes(mes) {
  // Tu código aquí
}

// --- Reto 5: Nivel de usuario ---
// Recibe "nivel" (string: "principiante", "intermedio", "avanzado").
// Retorna "acceso básico" para principiante, "acceso estándar" para intermedio,
// "acceso completo" para avanzado.
// Retorna "nivel no válido" para cualquier otro valor (default).
function nivelDeUsuario(nivel) {
  // Tu código aquí
}

module.exports = {
  tipoDeDia,
  mensajeOpcion,
  categoriaPorCodigo,
  diasDelMes,
  nivelDeUsuario,
};
