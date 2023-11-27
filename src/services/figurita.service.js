import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { Figurita } from '../dominio/figurita.js'

class FiguritaService {
  async allInstances() {
    const figuritasJSON = await axios.get(
      `${REST_SERVER_URL}/TodasLasFiguritas/`, {params: {campoDeBusqueda: ''}}
      /* { campoDeBusqueda: 'alejandro' }, */
    )
    const figuritas = figuritasJSON.data.map((figuritaJSON) =>
      Figurita.fromJson(figuritaJSON),
    )
    return figuritas
  }
}

export const figuritaService = new FiguritaService()

/* FALTA IMPLEMENTAR CAMBO DE BUSQUEDA */

/* async todasLasFiguritas(filtro: FiltroFiguritas) {
  const figuritas$ = this.httpClient.get<FiguritaJSON[]>(
    ${REST_SERVER_URL}/FiguritasRepetidas/${UsuarioLogin.getInstance().id},
    { params: filtro.asHttpParams() }
  )

  return await this.awaitReturnFiguritas(figuritas$)
} */
