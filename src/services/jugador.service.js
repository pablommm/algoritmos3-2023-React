import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { Jugador } from '../dominio/jugador.js'

class JugadorService {
  async allInstances(campoDeBusqueda) {
    const jugadoresJSON = await axios.get(`${REST_SERVER_URL}/jugadores`, {
      params: { campoDeBusqueda: campoDeBusqueda },
    })
    const jugadores = jugadoresJSON.data.map((jugadorJSON) =>
      Jugador.fromJson(jugadorJSON),
    )
    return jugadores
  }

  async delete(idJugador) {
    await axios.delete(`${REST_SERVER_URL}/deleteJugador`, {
      params: { idJugador: idJugador },
    })
  }

  async jugadoresCrearFigurita() {
    const jugadoresJSON = await axios.get(
      `${REST_SERVER_URL}/jugadores/createFigurita`,
    )
    const jugadores = jugadoresJSON.data.map((jugadorJSON) =>
      Jugador.fromJson(jugadorJSON),
    )
    return jugadores
  }
}

export const jugadorService = new JugadorService()
