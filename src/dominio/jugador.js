export class Jugador {
  constructor() {
    this.nombre = ''
    this.apellido = ''
    this.fechaDeNacimiento = ''
    this.nroDeCamiseta = 0
    this.altura = 0
    this.peso = 0
    this.posicion = ''
    this.pais = ''
    this.cotizacion = 0
    this.id = 0
  }

  static fromJson(jugadorJSON) {
    const result = Object.assign(new Jugador(), jugadorJSON, {
      nombre: `${jugadorJSON.nombre} ${jugadorJSON.apellido}`,
    })
    return result
  }
}
