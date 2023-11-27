import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { PuntoDeVenta } from '../dominio/puntoDeVenta.js'

class PuntoDeVentaService {
  async allInstances(campoDeBusqueda) {
    const puntosDeVentaJSON = await axios.get(
      `${REST_SERVER_URL}/puntoDeVentas/`, {params: {campoDeBusqueda: campoDeBusqueda}}
    )
    const puntosDeVenta = puntosDeVentaJSON.data.map((puntoDeVentaJSON) =>
      PuntoDeVenta.fromJson(puntoDeVentaJSON),
    )
    return puntosDeVenta
  }
}

export const puntoDeVentaService = new PuntoDeVentaService()
