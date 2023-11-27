import { useState /* , useEffect */ } from 'react'
import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/login.css'
import loginService from '../../services/login.service'
import { UsuarioLogin } from '../../dominio/usuarioLogin'
import { mostrarMensajeError } from '../../util/error-handling'
import { Snackbar, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getLoginUser = async () => {
    const usuarioLogin = new UsuarioLogin(usuario, password)
    try {
      /* validateLogin() */
      await loginService.getUsuarioLogin(usuarioLogin)
      console.log(await loginService.getUsuarioLogin(usuarioLogin))
      navigate('/plantilla/home')
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  /* const validateLogin = () => {
    validateUser()
    validatePass()
  }

  const validateUser = () => {
    if(usuario.includes('@')){
      throw new Error('El usuario no debe contener @')
    }
  }

  const validatePass = () => {
    if (password == '') {
      throw new Error('La contraseña no debe estar vacía')
    }
  } */

  const snackbarOpen = !!errorMessage // O se puede usar Boolean(errorMessage)

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
            <button
              onClick={getLoginUser}
              className="primary-button"
              data-testid="login"
            >
              Ingresar
            </button>
          </div>
        </div>
        <Snackbar
          open={snackbarOpen}
          variant="error"
          autoHideDuration={1800}
          onClose={() => setErrorMessage(false)}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
      </div>
    </>
  )
}

export default Login
