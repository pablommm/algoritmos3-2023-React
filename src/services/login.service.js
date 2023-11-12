import axios from 'axios'
import { REST_SERVER_URL } from '../services/configuration.js'

class LoginService {
    async getUsuarioLogin(usuarioLogin){
        const usuarioLoginJSON = await axios.post(`${REST_SERVER_URL}/usuarioLogin`, usuarioLogin)
        /* console.log(usuarioLoginJSON.data) */
        return usuarioLoginJSON.data
    }
}

const loginService = new LoginService()

export default loginService