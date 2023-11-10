/* eslint-disable react/jsx-no-undef */
import '../../Maquetado/CSS/input.css'
import '../../Maquetado/CSS/button.css'
import '../../Maquetado/CSS/general.css'
import '../../Maquetado/CSS/login.css'

function Login() {

    return (

        <div className="main-container">
            <div className="sub-main-container">
                <span className="login-title">WorldCApp</span>
                <div className="login-item">
                    <label>Usuario</label>
                    <div className="login-info">
                        <i className="fa-solid fa-user login-icon"></i>
                        <input type="text" placeholder="Usuario" className="login-input" />
                    </div>
                </div>
                <div className="login-item">
                    <label>Contraseña</label>
                    <div className="login-info">
                        <i className="fa-solid fa-key login-icon"></i>
                        <input type="password" placeholder="Contraseña" className="login-input" />
                    </div>
                </div>
                <div>
                    <button className="primary-button">Ingresar</button>
                </div>
            </div>
        </div>
    )
}

export default Login