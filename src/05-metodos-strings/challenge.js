// ============================================
// Reto: Métodos esenciales de strings en JavaScript
// ============================================
// Practica length, slice, split, trim, toLowerCase, includes,
// startsWith, endsWith y replace. Los strings son inmutables.
// Ejecuta los tests con: npx vitest src/05-metodos-strings
// ============================================

// --- Reto 1: Contar caracteres con length ---
// Recibe un string "texto". Retorna la cantidad de caracteres (usa la propiedad length).
function contarCaracteres(texto) {
  const cantidad = texto.length;
  return cantidad;
}

console .log(contarCaracteres("Hola, mundo!")); // 12

// --- Reto 2: Extraer porción con slice ---
// Recibe "texto", "inicio" y "fin" (índices). Retorna la porción desde inicio hasta fin (sin incluir fin).
// Si fin no se pasa o es undefined, extrae hasta el final del string.
// Usa el método slice.
function extraerConSlice(texto, inicio, fin) {
  const porcion = texto.slice(inicio, fin);
  return porcion;
}

console.log(extraerConSlice("JavaScript es un lenguaje de programación.", 0, 10)); // "JavaScript"

// --- Reto 3: Extraer desde el final con slice (índice negativo) ---
// Recibe "texto" y "n" (número). Retorna los últimos "n" caracteres del string.
// Usa slice con índice negativo: slice(-n).
function extraerDesdeFinal(texto, n) {
  const ultimosCaracteres = texto.slice(-n);
  return ultimosCaracteres;
}

console.log(extraerDesdeFinal("JavaScript es un lenguaje de programación.", 10)); // "programación."

// --- Reto 4: Dividir en array con split ---
// Recibe "texto" y "separador" (string). Retorna un array con las partes del texto
// divididas por el separador. Usa el método split.
function dividirEnPartes(texto, separador) {
  const partes = texto.split(separador);
  return partes;
}

console.log(dividirEnPartes("Linea1 Línea2 Línea3", " ")); // ["Linea1", "Línea2", "Línea3"]

// --- Reto 5: Limpiar espacios con trim ---
// Recibe un string "texto" que puede tener espacios al inicio y/o al final.
// Retorna el mismo texto sin espacios al inicio ni al final. Usa trim.
function limpiarEspacios(texto) {
  const textoLimpio = texto.trim();
  return textoLimpio;
}

console.log(limpiarEspacios("   Hola, mundo!   ")); // "Hola, mundo!"

// --- Reto 6: Normalizar a minúsculas ---
// Recibe un string "texto". Retorna el texto en minúsculas usando toLowerCase.
// Útil para comparaciones sin importar mayúsculas/minúsculas.
function normalizarMinusculas(texto) {
  const textoMinusculas = texto.toLowerCase();
  return textoMinusculas;
}

console.log(normalizarMinusculas("HOLA, MUNDO!")); // "hola, mundo!"

// --- Reto 7: Saber si incluye una subcadena con includes ---
// Recibe "texto" y "subcadena". Retorna true si el texto incluye la subcadena, false si no.
// Usa el método includes.
function incluyeSubcadena(texto, subcadena) {
  const incluye = texto.includes(subcadena);
  return incluye;
}

const resultado = incluyeSubcadena("Aprende JavaScript desde cero", "JavaScript");
console.log(resultado); // true

// --- Reto 8: Validar inicio con startsWith ---
// Recibe "texto" y "prefijo". Retorna true si el texto empieza con el prefijo, false si no.
// Útil para validar prefijos (ej: nombre de archivo, protocolo).
function empiezaCon(texto, prefijo) {
  const empieza = texto.startsWith(prefijo);
  return empieza;
}

const resultadoPrefijo = empiezaCon("documento.md", "doc");
console.log(resultadoPrefijo); // true

// --- Reto 9: Validar fin con endsWith ---
// Recibe "texto" y "sufijo". Retorna true si el texto termina con el sufijo, false si no.
// Útil para validar extensiones de archivo (ej: "documento.md" termina con ".md").
function terminaCon(texto, sufijo) {
  const termina =texto.endsWith(sufijo);
  return termina;
}

const resultadoSufijo = terminaCon("documento.md", ".md");
console.log(resultadoSufijo); // true

// --- Reto 10: Reemplazar sin mutar con replace ---
// Recibe "texto", "buscar" y "reemplazo". Retorna un NUEVO string donde la primera
// ocurrencia de "buscar" se sustituye por "reemplazo". El original no se modifica (inmutabilidad).
// Usa el método replace.
function reemplazarPrimera(texto, buscar, reemplazo) {
  const textoReemplazo = texto.replace(buscar, reemplazo);
  return textoReemplazo;
}

const resultadoReemplazo = reemplazarPrimera("Quien es JSON?.", "Quien es", "Who is");
console.log(resultadoReemplazo); // "Who is JSON?."

module.exports = {
  contarCaracteres,
  extraerConSlice,
  extraerDesdeFinal,
  dividirEnPartes,
  limpiarEspacios,
  normalizarMinusculas,
  incluyeSubcadena,
  empiezaCon,
  terminaCon,
  reemplazarPrimera,
};
