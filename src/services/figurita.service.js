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

  async delete(idFigurita) {
    await axios.delete(`${REST_SERVER_URL}/deleteFigurita`, {
      params: { idFigurita: idFigurita },
    })
  }

  async create(figurita) {
    return axios.post(`${REST_SERVER_URL}/crearFigurita`, figurita)
  }

  async getById(id) {
    const figuritaJSON = await axios.get(
      `${REST_SERVER_URL}/editarFigurita/${id}`,
    )
    const figurita = Figurita.fromJson(figuritaJSON.data)
    return figurita
  }

  async update(figurita) {
    await axios.put(`${REST_SERVER_URL}/updateFigurita`, figurita)
  }
}

export const figuritaService = new FiguritaService()
