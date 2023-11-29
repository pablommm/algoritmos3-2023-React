import './Buscador.css'
import { useNavigate, useLocation } from 'react-router-dom'
import '../../App.jsx'
import Card from '../Card/Card.jsx'
/* import { useOnInit } from '../../customHooks/hooks.js' */
import { useEffect, useState } from 'react'
import { mostrarMensajeError } from '../../util/error-handling.jsx'
import { Snackbar, Alert } from '@mui/material'
import Searchbar from '../Searchbar/Searchbar.jsx'

function Buscador({ setTitulo, data, component }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  const location = useLocation()
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

  const deleteCard = async (id) => {
    try {
      await data.deleteService(id)
      await traerDatos()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  useEffect(() => {
    setTitulo(data.title)
    traerDatos()
  }, [location.pathname])

  /* const onInit = async () => {
    traerDatos()
    setTitulo(data.title)
  }

  useOnInit(onInit) */

  const snackbarOpen = !!errorMessage

  return (
    <>
      <Searchbar traerDatosService={traerDatos}></Searchbar>
      <div className="sub-main-container">
        {datos.map((item) => (
          <Card
            key={item.id}
            item={item}
            icon={data.icon}
            deleteCard={deleteCard}
          >
            {component}
          </Card>
        ))}

        <span
          id="id_add"
          className="material-symbols-outlined plus-icon"
          onClick={() => navigate(`/plantilla/${data.navegacion}`)}
        >
          add
        </span>
        <Snackbar
          open={snackbarOpen}
          variant="error"
          autoHideDuration={1800}
          onClose={() => setErrorMessage(false)}
          style={{ marginBottom: '8rem', fontSize: '400rem' }}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
      </div>
    </>
  )
}

export default Buscador
