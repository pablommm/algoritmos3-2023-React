import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { Seleccion } from '../dominio/seleccion.js'

class SeleccionService {
  async allInstances(campoDeBusqueda) {
    const seleccionesJSON = await axios.get(`${REST_SERVER_URL}/Selecciones`, {
      params: { campoDeBusqueda: campoDeBusqueda },
    })
    const selecciones = seleccionesJSON.data.map((seleccionJSON) =>
      Seleccion.fromJson(seleccionJSON),
    )
    return selecciones
  }
}

export const seleccionService = new SeleccionService()
