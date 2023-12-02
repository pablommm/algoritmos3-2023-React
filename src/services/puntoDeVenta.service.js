import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { PuntoDeVenta } from '../dominio/puntoDeVenta.js'

class PuntoDeVentaService {
  async allInstances(campoDeBusqueda) {
    const puntosDeVentaJSON = await axios.get(
      `${REST_SERVER_URL}/puntoDeVentas/`,
      { params: { campoDeBusqueda: campoDeBusqueda } },
    )
    const puntosDeVenta = puntosDeVentaJSON.data.map((puntoDeVentaJSON) =>
      PuntoDeVenta.fromJson(puntoDeVentaJSON),
    )
    return puntosDeVenta
  }

  async delete(idPuntoDeVentas) {
    await axios.delete(`${REST_SERVER_URL}/deletePuntoDeVentas`, {
      params: { idPuntoDeVentas: idPuntoDeVentas },
    })
  }

  // async create(puntoDeVenta) {
  //   return axios.post(`${REST_SERVER_URL}/crearPuntoDeVenta`, jugador)
  // }

  async create(puntoDeVenta) {
    return axios.post(`${REST_SERVER_URL}/crearPuntoDeVenta`, puntoDeVenta)
  }

  async update(puntoDeVenta) {
    return axios.put(`${REST_SERVER_URL}/updatePuntoDeVenta`, puntoDeVenta)
  }

}

export const puntoDeVentaService = new PuntoDeVentaService()
