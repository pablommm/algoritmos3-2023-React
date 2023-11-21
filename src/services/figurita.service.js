import axios from 'axios'
import { REST_SERVER_URL } from '../services/configuration.js'
import { FiguritaUsuario } from '../dominio/figurita.js' 
/* import { Filtro } from '../dominio/filtro.js'  */

class FiguritaService {
    /* async todasLasFiguritas(filtro) {
      const figuritas$ = await axios.get<FiguritaJSON[]>(
        `${REST_SERVER_URL}/TodasLasFiguritas`,
        { params: filtro.asHttpParams() }
      )
  
      return await  figuritaJSON.map((figuritaJSON) => FiguritaUsuario.fromJson(figuritaJSON)
    )
    } */

}

const figuritaService = new FiguritaService()

export default figuritaService