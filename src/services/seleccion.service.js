import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { Confederacion, Seleccion } from '../dominio/seleccion.js'

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

   async getConfederaciones(){
    const confederacionesJSON = await axios.get(`${REST_SERVER_URL}/confederaciones`)

    const confederaciones = confederacionesJSON.data
    
    return confederaciones
  }  

  async delete(idSeleccion) {
    await axios.delete(`${REST_SERVER_URL}/deleteSeleccion`, {
      params: { idSeleccion: idSeleccion },
    })
  }




  /* async seleccionesCrearJugador() {
    const seleccionesJSON = await axios.get(
      `${REST_SERVER_URL}/selecciones/createJugador`,
    )
    const selecciones = seleccionesJSON.data.map((seleccionJSON) =>
      Seleccion.fromJson(seleccionJSON),
    )
    return selecciones
  } */

  async create(seleccion) {
    return axios.post(`${REST_SERVER_URL}/nuevaSeleccion`, seleccion)
  }
}

export const seleccionService = new SeleccionService()
