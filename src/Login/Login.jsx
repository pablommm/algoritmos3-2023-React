import '../../Maquetado/CSS/input.css'
import '../../Maquetado/CSS/button.css'
import '../../Maquetado/CSS/general.css'
import '../../Maquetado/CSS/login.css'




function Login() {
    
    return (   
    
        <><head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login</title>
            <script src="https://kit.fontawesome.com/e0d6dd6321.js" crossOrigin="anonymous"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Exo:ital,wght@1,900&display=swap"
                rel="stylesheet" />

        </head><body>


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
            </body></>)  
  }
  
  export default Login