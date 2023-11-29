export class PuntoDeVenta {
  constructor() {
    this.id = 0
    this.nombre = ''
    this.direccion = ''
    this.ubicacionGeograficaX = 0
    this.ubicacionGeograficaY = 0
    this.stockDeSobres = 0
    this.tipo = ''
    this.pedidosPendientes = 0
  }

  get titulo() {
    return this.nombre
  }

  static fromJson(puntoDeVentaJSON) {
    const result = Object.assign(new PuntoDeVenta(), puntoDeVentaJSON)
    return result
  }
}
