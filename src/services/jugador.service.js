import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { Jugador } from '../dominio/jugador.js'

class JugadorService {
  async allInstances() {
    const jugadoresJSON = await axios.get(`${REST_SERVER_URL}/jugadores`)
    const jugadores = jugadoresJSON.data.map((jugadorJSON) =>
      Jugador.fromJson(jugadorJSON),
    )
    return jugadores
  }
}

export const jugadorService = new JugadorService()
