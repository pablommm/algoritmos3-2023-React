import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'
import { HomeDominio } from '../dominio/home'

const homeAsJson = (homeJSON) => HomeDominio.fromJson(homeJSON)

class HomeService {
  async getCantidadesHome() {
    const cantidadesHomeJSON = await axios.get(`${REST_SERVER_URL}/Home/`)
    return homeAsJson(cantidadesHomeJSON.data)
  }
}

export const homeService = new HomeService()