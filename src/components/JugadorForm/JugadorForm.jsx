import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'

import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'
import '../../../Maquetado/CSS/footer.css'
import './JugadorForm.css'
/* import { useOnInit } from '../../customHooks/hooks' */
import { mostrarMensajeError } from '../../util/error-handling'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Snackbar, Alert } from '@mui/material'
import { Jugador } from '../../dominio/jugador'
import { jugadorService } from '../../services/jugador.service'
import { seleccionService } from '../../services/seleccion.service'

function JugadorForm({ setTitulo }) {
  const location = useLocation()
  const [selecciones, setSelecciones] = useState([])
  const [jugador, setJugador] = useState(new Jugador())
  const [errorMessage, setErrorMessage] = useState('')
  const snackbarOpen = !!errorMessage

  const actualizar = (referencia, valor) => {
    jugador[referencia] = valor
    setJugador({ ...jugador })
  }

  useEffect(() => {
    setTitulo('Nuevo Jugador')
    traerSelecciones()
  }, [location.pathname])

  const traerSelecciones = async () => {
    try {
      const selecciones = await seleccionService.allInstances()
      setSelecciones(selecciones)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const create = async () => {
    try {
      await jugadorService.create(jugaor)
      history.back()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  return (
    <div className="sub-main-container  form-container">
      <title>Formulario Punto de Venta</title>

      <div className="formulario">
        <form action="p" method="POST">
          <label htmlFor="nombre">Nombre:</label>
          <input
            onChange={(event) => {
              actualizar('nombre', event.target.value)
            }}
            value={jugador.nombre}
            type="text"
            name="nombre"
            required
          />

          <label htmlFor="apellido">Apellido:</label>
          <input
            onChange={(event) => {
              actualizar('apellido', event.target.value)
            }}
            value={jugador.apellido}
            type="text"
            name="apellido"
            required
          />

          <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
          <input type="date" name="fecha_nacimiento" required />

          <label htmlFor="coordenada_x">Altura:</label>
          <input type="number" name="coordenada_x" step="any" required />

          <label htmlFor="coordenada_y">Peso:</label>
          <input type="number" name="coordenada_y" step="any" required />

          <label htmlFor="sobres_disponibles">Nro Camiseta:</label>
          <input type="number" name="sobres_disponibles" required min="0" />

          <label htmlFor="pedidos_pendientes">Seleccion :</label>
          <select
            className="select"
            value={jugador.idSeleccion}
            onChange={(event) => {
              actualizar('idSeleccion', event.target.value)
            }}
          >
            {selecciones.map((seleccion) => (
              <option key={seleccion.id} value={seleccion.id}>
                {seleccion.titulo}
              </option>
            ))}
          </select>

          <label htmlFor="nombre">Año de debut en la seleccion:</label>
          <input type="date" name="nombre" required />

          <label htmlFor="tipo_negocio">Posicion:</label>
          <select name="tipo_negocio" className="select">
            <option value="Kiosko">Defensor</option>
            <option value="Supermercado">Delantero</option>
          </select>

          <label htmlFor="on_fire">Es On Fire:</label>
          <input type="checkbox" name="on_fire" />

          <label htmlFor="pedidos_pendientes">Cotización :</label>
          <input type="number" name="pedidos_pendientes" required min="0" />
          <div className="buttonConteiner">
            <button className="secondary-button" onClick={() => history.back()}>
              Volver
            </button>
            {/* <button className="secondary-button" >Volver</button> */}
            <button className="primary-button">Guardar</button>
          </div>
        </form>
      </div>
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
  )
}

export default JugadorForm
