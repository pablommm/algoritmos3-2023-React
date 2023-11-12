import { useState, useEffect } from "react"
import "../../Maquetado/CSS/input.css"
import "../../Maquetado/CSS/button.css"
import "../../Maquetado/CSS/general.css"
import "../../Maquetado/CSS/login.css"
import loginService from "../Services/login.service"
import { UsuarioLogin } from '../dominio/usuarioLogin'

export const Login = () => {
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  
  const getLoginUser = async () => {
    const usuarioLogin = new UsuarioLogin(usuario, password)
    const codigoLogin = await loginService.getUsuarioLogin(usuarioLogin)
    console.log(codigoLogin)
  }

  useEffect(() => {

    getLoginUser()
  }, [])

  return (
    <>
      <div className="main-container">
        <div className="sub-main-container">
          <span className="login-title">WorldCApp</span>
          <div className="login-item">
            <div className="login-info">
              <i className="fa-solid fa-user login-icon"></i>
              <input
                onChange={(event) => setUsuario(event.target.value)}
                value={usuario}
                type="text"
                placeholder="Usuario"
                className="login-input"
              />
            </div>
          </div>
          <div className="login-item">
            <div className="login-info">
              <i className="fa-solid fa-key login-icon"></i>
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder="Contraseña"
                className="login-input"
              />
            </div>
          </div>
          <div>
            <button onClick={getLoginUser} className="primary-button">
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
