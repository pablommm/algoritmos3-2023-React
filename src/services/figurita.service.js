import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { Figurita } from '../dominio/figurita.js'
class FiguritaService {
  async allInstances(campoDeBusqueda) {
    const figuritasJSON = await axios.get(
      `${REST_SERVER_URL}/TodasLasFiguritas/`,
      { params: { campoDeBusqueda: campoDeBusqueda } },
    )
    const figuritas = figuritasJSON.data.map((figuritaJSON) =>
      Figurita.fromJson(figuritaJSON),
    )
    return figuritas
  }
}

export const figuritaService = new FiguritaService()
