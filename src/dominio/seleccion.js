export class Seleccion {
  constructor() {
    this.id = 0
    this.confederacion = ''
    this.copasDelMundo = 0
    this.nombre = ''
  }

  static fromJson(seleccionJSON) {
    const result = Object.assign(new Seleccion(), seleccionJSON, {
      nombre: seleccionJSON.pais,
    })
    return result
  }
}
