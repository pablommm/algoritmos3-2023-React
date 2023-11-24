export class Figurita {
  constructor() {
    this.nombre = ''
    this.apellido = ''
    this.onFire = null
    this.numero = 0
    this.nivelDeImpresion = ''
    this.valoracionFigurita = 0
    this.valoracionBase = ''
    this.imagen = ''
    this.id = 0
  }

  static fromJson(figuritaJSON) {
    const result = Object.assign(new Figurita(), figuritaJSON)
    return result
  }
}
