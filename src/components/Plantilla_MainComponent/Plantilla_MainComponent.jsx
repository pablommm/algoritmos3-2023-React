import './Plantilla_MainComponent.css'
/* import '../../../Maquetado/CSS/searchbar.css' */
import { Outlet, useOutletContext } from 'react-router-dom'
import { useNavigate, useLoaderData, useLocation } from 'react-router-dom'
import '../../App.jsx'
import Card from '../Card/Card.jsx'
import { useOnInit } from '../../customHooks/hooks.js'
import { useEffect, useState } from 'react'
import { mostrarMensajeError } from '../../util/error-handling.jsx'
import Searchbar from '../Searchbar/Searchbar.jsx'

function Plantilla_MainComponent({ setTitulo, data, component }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  const location = useLocation()

  /*  const location = useLocation() */
  const [datos, setDatos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const traerDatos = async (campoBusqueda) => {
    try {
      const datosCards = await data.datosService(campoBusqueda)
      setDatos(datosCards)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  setTitulo(data.title())
  useEffect(() => {
    setTitulo(data.title())
    traerDatos()
  }, [location.pathname])

  /* useOnInit(traerDatos) */

  return (

      <>
        <Searchbar traerDatosService={traerDatos}></Searchbar>
        <div className="sub-main-container">
          {datos.map((item) => (
            <Card key={item.id} item={item}>
              {component}
            </Card>
          ))}

          <span
            id="id_add"
            className="material-symbols-outlined plus-icon"
            onClick={() => navigate(`/plantilla/${data.navegacion()}`)}
          >
            add
          </span>
        </div>
      </>

  )
}

export default Plantilla_MainComponent
