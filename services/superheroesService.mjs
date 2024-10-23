// services/superheroesService.mjs
import SuperheroesFileRepository from '../repository/superheroesRepository.mjs';

const repository = new SuperheroesFileRepository();

/**
 * Obtiene un superhéroe por su ID.
 * @param {number} id - ID del superhéroe.
 * @returns {Superheroe|null} - Superhéroe encontrado o null si no existe.
 */
export function obtenerSuperheroePorId(id) {
  const superheroes = repository.obtenerTodos();
  return superheroes.find(hero => hero.id === id) || null;
}

/**
 * Busca superhéroes por un atributo y valor específicos.
 * @param {string} atributo - Atributo a buscar (e.g., nombreSuperHeroe, planetaOrigen).
 * @param {string} valor - Valor del atributo.
 * @returns {Superheroe[]} - Lista de superhéroes que cumplen con el criterio.
 */
export function buscarSuperheroesPorAtributo(atributo, valor) {
  const superheroes = repository.obtenerTodos();
  const atributoLower = atributo.toLowerCase();
  const valorLower = valor.toLowerCase();
  return superheroes.filter(hero => {
    const heroAtributo = hero[atributo];
    if (!heroAtributo) return false;
    if (Array.isArray(heroAtributo)) {
      return heroAtributo.some(item => item.toLowerCase().includes(valorLower));
    }
    if (typeof heroAtributo === 'string') {
      return heroAtributo.toLowerCase().includes(valorLower);
    }
    // Manejar otros tipos si es necesario
    return false;
  });
}

/**
 * Obtiene una lista de superhéroes mayores de 30 años, del planeta Tierra y con al menos 2 poderes.
 * @returns {Superheroe[]} - Lista de superhéroes que cumplen con los criterios.
 */
export function obtenerSuperheroesMayoresDe30() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(hero => 
    hero.edad > 30 &&
    hero.planetaOrigen.toLowerCase() === 'tierra' &&
    Array.isArray(hero.poder) &&
    hero.poder.length >= 2
  );
}
