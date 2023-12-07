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
import CardHome from '../CardHome/CardHome'

export const Home = ({ setTitulo }) => {
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
    //setTitulo('Home')
    traerDatos()
  }

  useOnInit(init)

  return (
    <>
      <div className="home">
        <title>Home</title>
        <div className="dashboard">
          <CardHome
            icon={'fa-solid fa-clipboard-user icono-faltantes'}
            cantidad={datos.cantidadFiguritasFaltantes}
            leyenda={'Figuritas Faltantes'}
          ></CardHome>
          <CardHome
            icon={'fa-solid fa-clipboard-user icono-repetidas'}
            cantidad={datos.cantidadFiguritasRepetidas}
            leyenda={'Figuritas Repetidas'}
          ></CardHome>
          <CardHome
            icon={'fa-solid fa-store icono-general'}
            cantidad={datos.cantidadPuntosDeVentas}
            leyenda={'Puntos de Venta'}
          ></CardHome>
          <CardHome
            icon={'fa-solid fa-user icono-general'}
            cantidad={datos.cantidadUsuarios}
            leyenda={'Usuarios Activos'}
          ></CardHome>
        </div>
      </div>
    </>
  )
}

export default Home
