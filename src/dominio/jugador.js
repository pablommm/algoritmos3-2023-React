import { Seleccion } from "./seleccion"

export class Jugador {
  constructor() {
    this.nombre = ''
    this.apellido = ''
    this.fechaDeNacimiento = ''
    this.nroDeCamiseta = 0
    this.anioDebut = ''
    this.altura = 0
    this.peso = 0
    this.lider = false
    this.posicion = ''
    this.pais = 'Pais'
    this.cotizacion = 0
    this.id = 0
    this.idSeleccion = 0
  }

  get titulo() {
    return `${this.nombre} ${this.apellido}`
  }

  static fromJson(jugadorJSON) {
    const result = Object.assign(new Jugador(), jugadorJSON, {idSeleccion: jugadorJSON.seleccion.id})
    return result
  }
}
