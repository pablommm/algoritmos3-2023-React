export class PuntoDeVenta {
  constructor() {
    this.tipo 
    this.id = null
    this.nombre = ''
    this.direccion = ''
    // this.ubicacionGeograficaX = 0
    // this.ubicacionGeograficaY = 0 
    this.ubicacionGeografica = new UbicacionGeografica()
    this.stockDeSobres = 0
    this.tipo = ''
    this.cantidadPedidosPendientes = 0
  }

  get titulo() {
    return this.nombre
  }

  static fromJson(puntoDeVentaJSON) {
    const result = Object.assign(new PuntoDeVenta(), puntoDeVentaJSON)
    return result
  }
}

class UbicacionGeografica {
  constructor() {
    this.x = 0
    this.y = 0
  }
}
