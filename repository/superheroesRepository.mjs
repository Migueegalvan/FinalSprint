// repository/superheroesRepository.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';
import Superheroe from '../models/superheroe.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperheroesFileRepository extends SuperheroesDataSource {
  constructor() {
    super();
    this.filePath = path.join(__dirname, '../superheroes.txt');
  }

  obtenerTodos() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      const superheroesData = JSON.parse(data);
      // Convertir cada objeto plano a una instancia de Superheroe
      return superheroesData.map(heroData => new Superheroe(
        heroData.id,
        heroData.nombreSuperHeroe,
        heroData.nombreReal,
        heroData.nombreSociedad,
        heroData.edad,
        heroData.planetaOrigen,
        heroData.debilidad,
        heroData.poder,
        heroData.habilidadEspecial,
        heroData.aliado,
        heroData.enemigo
      ));
    } catch (error) {
      console.error('Error al leer el archivo de superhéroes:', error);
      return [];
    }
  }

  guardarTodos(superheroes) {
    try {
      // Convertir instancias de Superheroe a objetos planos
      const superheroesData = superheroes.map(hero => ({
        id: hero.id,
        nombreSuperHeroe: hero.nombreSuperHeroe,
        nombreReal: hero.nombreReal,
        nombreSociedad: hero.nombreSociedad,
        edad: hero.edad,
        planetaOrigen: hero.planetaOrigen,
        debilidad: hero.debilidad,
        poder: hero.poder,
        habilidadEspecial: hero.habilidadEspecial,
        aliado: hero.aliado,
        enemigo: hero.enemigo
      }));

      const data = JSON.stringify(superheroesData, null, 2);
      fs.writeFileSync(this.filePath, data, 'utf-8');
    } catch (error) {
      console.error('Error al guardar el archivo de superhéroes:', error);
    }
  }
}
