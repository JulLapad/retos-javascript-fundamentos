// ============================================
// Reto: Operadores lógicos AND, OR y NOT en JavaScript
// ============================================
// Practica AND (&&), OR (||) y NOT (!) para combinar, evaluar y negar condiciones.
// Útil para validaciones, permisos (admin, usuario activo) y flujos de decisión.
// Ejecuta los tests con: npx vitest src/08-logic
// ============================================

// --- Reto 1: AND (&&) ---
// Recibe dos booleanos "a" y "b".
// Retorna el resultado de a && b (true solo si ambas son true).
function resultadoAnd(a, b) {
  return a && b
}

console.log(resultadoAnd(true, true));   // true
console.log(resultadoAnd(true, false));  // false
console.log(resultadoAnd(false, true));  // false
console.log(resultadoAnd(false, false)); // false

// --- Reto 2: OR (||) ---
// Recibe dos booleanos "a" y "b".
// Retorna el resultado de a || b (true si al menos una es true).
function resultadoOr(a, b) {
  return a || b
}

console.log(resultadoOr(true, true));   // true
console.log(resultadoOr(true, false));  // true
console.log(resultadoOr(false, true));  // true
console.log(resultadoOr(false, false)); // false

// --- Reto 3: NOT (!) ---
// Recibe un booleano "val".
// Retorna el resultado de !val (invierte: true → false, false → true).
function resultadoNot(val) {
  return (!val)
}

console.log(resultadoNot(true)); // false
console.log(resultadoNot(false)); // true

// --- Reto 4: Validación con AND (ambas condiciones) ---
// Recibe "esAdmin" y "estaActivo" (booleanos).
// Retorna true solo si es administrador Y está activo (puede ver la lista de usuarios).
function puedeVerListaUsuarios(esAdmin, estaActivo) {
  return esAdmin && estaActivo;
}

//const esAdmin = true;
//const estaActivo = true; // Puede ver la lista de usuarios.

if (puedeVerListaUsuarios(esAdmin, estaActivo)) {
  console.log("Puede ver la lista de usuarios.");
} else {
  console.log("No puede ver la lista de usuarios.");
}


// --- Reto 5: Validación con OR (al menos una condición) ---
// Recibe "esUsuarioValido" y "tienePermisoEspecial" (booleanos).
// Retorna true si cumple cualquiera de las dos condiciones (puede acceder).
function puedeAcceder(esUsuarioValido, tienePermisoEspecial) {
  return esUsuarioValido || tienePermisoEspecial;
}

const esUsuarioValido = false;
const tienePermisoEspecial = false; // No puede ver la lista de usuarios.

if (puedeAcceder(esUsuarioValido, tienePermisoEspecial)) {
  console.log("Puede ver la lista de usuarios.");
} else {
  console.log("No puede ver la lista de usuarios.");
}

// --- Reto 6: Validación con NOT (negar condición) ---
// Recibe "esAdmin" (booleano).
// Retorna true si NO es administrador (mostrar opción limitada para no admins).
function mostrarOpcionLimitada(esAdmin) {
   return !esAdmin;
}

const esAdmin = false; // Mostrar opción limitada para no admins

if (mostrarOpcionLimitada(esAdmin)) {
  console.log("Mostrar opción limitada para no admins");
} else {
  console.log("Puede ver la lista de usuarios.");
}

module.exports = {
  resultadoAnd,
  resultadoOr,
  resultadoNot,
  puedeVerListaUsuarios,
  puedeAcceder,
  mostrarOpcionLimitada,
};
