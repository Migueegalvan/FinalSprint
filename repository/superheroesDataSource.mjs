// repository/superheroesDataSource.mjs
export default class SuperheroesDataSource {
    // Método abstracto para obtener todos los superhéroes
    obtenerTodos() {
      throw new Error('Este método debe ser implementado por la subclase');
    }
  
    // Método abstracto para guardar todos los superhéroes
    guardarTodos(superheroes) {
      throw new Error('Este método debe ser implementado por la subclase');
    }
  }
  