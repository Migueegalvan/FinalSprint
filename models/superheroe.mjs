// models/superheroe.mjs
export default class Superheroe {
    constructor(
      id,
      nombreSuperHeroe,
      nombreReal,
      nombreSociedad,
      edad,
      planetaOrigen,
      debilidad,
      poder,
      habilidadEspecial,
      aliado,
      enemigo
    ) {
      this.id = id; // Identificador único
      this.nombreSuperHeroe = nombreSuperHeroe; // Nombre del superhéroe
      this.nombreReal = nombreReal; // Nombre real
      this.nombreSociedad = nombreSociedad; // Nombre en sociedad
      this.edad = edad; // Edad
      this.planetaOrigen = planetaOrigen; // Planeta de origen
      this.debilidad = debilidad; // Debilidad
      this.poder = poder; // Array de poderes
      this.habilidadEspecial = habilidadEspecial; // Habilidad especial
      this.aliado = aliado; // Aliados
      this.enemigo = enemigo; // Enemigos
    }
  
    // Método para agregar un poder
    agregarPoder(nuevoPoder) {
      this.poder.push(nuevoPoder);
    }
  
    // Método para eliminar un poder
    eliminarPoder(poderAEliminar) {
      this.poder = this.poder.filter(p => p !== poderAEliminar);
    }
  }
  