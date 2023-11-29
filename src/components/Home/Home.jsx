import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/login.css'
import '../../../Maquetado/CSS/home.css'
import { mostrarMensajeError } from '../../util/error-handling'
import { homeService } from '../../services/home.service'
import { useOnInit } from '../../customHooks/hooks'
import { useState } from 'react'
import './Home.css'

export const Home = ({ setTitulo, data }) => {
  const [datos, setDatos] = useState([])
  /* const [puntosDeVenta, setPuntosDeVenta] = useState([]) */
  const [errorMessage, setErrorMessage] = useState('')
  const traerDatos = async () => {
    try {
      const datosCards = await homeService.allInstances()
      setDatos(datosCards)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const init = async () => {
    setTitulo("Home")
    traerDatos()
  }

  useOnInit(init)



  return (
    <>
      <div className="home">
        <title>Home</title>
        <div className="dashboard">
          <div className="box">
            <span id="icono_Faltantes" className="material-symbols-outlined">
              account_box
            </span>
            <div>
              {<h2>{datos.cantidadFiguritasFaltantes}</h2>}
              <p>Figuritas Faltantes</p>
            </div>
          </div>
          <div className="box">
            <span id="icono_Repetidas" className="material-symbols-outlined">
              account_box
            </span>
            <div>
              <h2>{datos.cantidadFiguritasRepetidas}</h2>
              <p>Figuritas Repetidas</p>
            </div>
          </div>
          <div className="box">
            <span id="icono_box" className="material-symbols-outlined">
              storefront
            </span>
            <div>
              <h2>{datos.cantidadPuntosDeVentas}</h2>
              <p>Punto de Ventas</p>
            </div>
          </div>
          <div className="box">
            <span id="icono_box" className="material-symbols-outlined">
              person
            </span>
            <div>
              <h2>{datos.cantidadUsuarios}</h2>
              <p>Usuarios Activos</p>
            </div>
          </div>
          {/* <button onClick={console.log(jugadores)}></button> */}
        </div>
      </div>
    </>
  )
}

export default Home
