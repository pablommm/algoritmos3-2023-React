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

  async create(jugador) {
    return await axios.post(`${REST_SERVER_URL}/crearJugador`, jugador)
  }

  async getById(id) {
    const jugadorJSON = await axios.get(
      `${REST_SERVER_URL}/editarJugador/${id}`,
    )
    const jugador = Jugador.fromJson(jugadorJSON.data)
    return jugador
  }

  async update(jugador) {
    return await axios.put(`${REST_SERVER_URL}/updateJugador`, jugador)
  }
}

export const jugadorService = new JugadorService()
