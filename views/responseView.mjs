// views/responseView.mjs

/**
 * Renderiza un superhéroe individual en formato JSON.
 * @param {Superheroe} superheroe - Objeto del superhéroe.
 * @returns {string} - Cadena JSON del superhéroe.
 */
export function renderizarSuperheroe(superheroe) {
  return JSON.stringify(superheroe, null, 2);
}

/**
 * Renderiza una lista de superhéroes en formato JSON.
 * @param {Superheroe[]} superheroes - Array de superhéroes.
 * @returns {string} - Cadena JSON de la lista de superhéroes.
 */
export function renderizarListaSuperheroes(superheroes) {
  return JSON.stringify(superheroes, null, 2);
}
