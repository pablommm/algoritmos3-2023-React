import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/login.css'
import '../../../Maquetado/CSS/home.css'
import { mostrarMensajeError } from '../../util/error-handling'
import { homeService } from '../../services/homeService'
import { useOnInit } from '../../customHooks/hooks'
import { useState } from 'react'
import './Home.css'

export const Home = () => {
  const [datos, setDatos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const traerDatos = async () => {
    try {
      const datosCards = await homeService.allInstances()
      setDatos(datosCards)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  useOnInit(traerDatos)

  return (
    <>
      <div className="home">
        <title>Home</title>
        <div className="dashboard">
          <div className="box">
            <span id="id_footer2" className="material-symbols-outlined">
              account_box
            </span>
            <div>
              {<h2>{datos.cantidadFiguritasFaltantes}</h2>}
              <p>Figuritas Faltantes</p>
            </div>
          </div>
          <div className="box">
            <span id="id_footer3" className="material-symbols-outlined">
              account_box
            </span>
            <div>
              <h2>{datos.cantidadFiguritasRepetidas}</h2>
              <p>Figuritas Repetidas</p>
            </div>
          </div>
          <div className="box">
            <span id="id_footer" className="material-symbols-outlined">
              storefront
            </span>
            <div>
              <h2>{datos.cantidadPuntosDeVentas}</h2>
              <p>Punto de Ventas</p>
            </div>
          </div>
          <div className="box">
            <span id="id_footer" className="material-symbols-outlined">
              person
            </span>
            <div>
              <h2>{datos.cantidadUsuarios}</h2>
              <p>Usuarios Activos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
