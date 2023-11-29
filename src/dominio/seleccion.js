export class Seleccion {
  constructor() {
    this.id = 0
    this.confederacion = ''
    this.copasDelMundo = 0
    this.pais = ''
  }

  get titulo() {
    return this.pais
  }

  static fromJson(seleccionJSON) {
    const result = Object.assign(new Seleccion(), seleccionJSON)
    return result
  }
}
