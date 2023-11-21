export class HomeDominio {
  constructor() {
    this.cantidadPuntosDeVentas = 0
    this.cantidadUsuarios = 0
    this.cantidadFiguritasRepetidas = 0
    this.cantidadFiguritasFaltantes = 0
  }

  static fromJson(homeJSON) {
    const result = Object.assign(new HomeDominio(), homeJSON)
    return result
  }
}
