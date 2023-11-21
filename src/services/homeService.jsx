import axios from 'axios'
import { REST_SERVER_URL } from '../services/configuration.js'
import { Home } from '../dominio/home.js'

const homeAsJson = (homeJSON) => Home.fromJson(homeJSON)

class HomeService {
  async getCantidadesHome() {
    const cantidadesHomeJSON = await axios.get(`${REST_SERVER_URL}/Home/`)
    return homeAsJson(cantidadesHomeJSON.data)
  }
}

export const homeService = new HomeService()
