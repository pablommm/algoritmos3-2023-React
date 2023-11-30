export class Figurita {
  constructor() {
    this.nombre = ''
    this.apellido = ''
    this.onFire = false
    this.numero = 0
    this.nivelDeImpresion = ''
    this.valoracionFigurita = 0
    this.valoracionBase = ''
    this.imagen = ''
    this.id = 0
    this.idJugador = 0
  }

  get titulo() {
    return `${this.nombre} ${this.apellido}`
  }

  static fromJson(figuritaJSON) {
    const result = Object.assign(new Figurita(), figuritaJSON)
    return result
  }
}
