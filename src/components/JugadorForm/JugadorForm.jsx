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
      await jugadorService.create(jugador)
      history.back()
      
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  return (
    <div className="sub-main-container  form-container">
      <title>Formulario Jugador</title>

      <div className="formulario">
        <form /* action="/p" method="POST" */>
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
          <span>{jugador.nombre}</span>

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
          <span>{jugador.apellido}</span>

          <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
          <input
            onChange={(event) => {
              actualizar('fechaDeNacimiento', event.target.value)
            }}
            value={jugador.fechaDeNacimiento}
            type="date"
            name="fecha_nacimiento"
            required
          />
          <span>{jugador.fechaDeNacimiento}</span>

          <label htmlFor="altura">Altura:</label>
          <input
            onChange={(event) => {
              actualizar('altura', event.target.value)
            }}
            value={jugador.altura}
            type="number"
            name="altura"
            required
          />
          <span>{jugador.altura}</span>

          <label htmlFor="peso">Peso:</label>
          <input
            onChange={(event) => {
              actualizar('peso', event.target.value)
            }}
            value={jugador.peso}
            type="number"
            name="peso"
            required
          />
          <span>{jugador.peso}</span>

          <label htmlFor="nroCamiseta">Nro Camiseta:</label>
          <input
            onChange={(event) => {
              actualizar('nroDeCamiseta', event.target.value)
            }}
            value={jugador.nroDeCamiseta}
            type="number"
            name="nroCamiseta"
            required
            min="0"
          />
          <span>{jugador.nroDeCamiseta}</span>

          <label htmlFor="seleccion">Seleccion :</label>
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
          <span>{jugador.idSeleccion}</span>

          <label htmlFor="anioDebut">Año de debut en la seleccion:</label>
          <input
            onChange={(event) => {
              actualizar('anioDebut', event.target.value)
            }}
            value={jugador.anioDebut}
            type="date"
            name="nombre"
            required
          />
          <span>{jugador.anioDebut}</span>

          <label htmlFor="posicion">Posicion:</label>
          <select
            onChange={(event) => {
              actualizar('posicion', event.target.value)
            }}
            value={jugador.posicion}
            name="posicion"
            className="select"
          >
            <option value="Delantero">Delantero</option>
            <option value="Mediocampista">Mediocampista</option>
            <option value="Defensor">Defensor</option>
            <option value="Arquero">Arquero</option>
          </select>
          <span>{jugador.posicion}</span>

          <label htmlFor="lider">Es Lider:</label>
          <input
            onChange={(event) => {
              actualizar('lider', event.target.checked)
            }}
            value={jugador.lider}
            type="checkbox"
            name="lider"
          />
          <span>{jugador.lider ? 'Líder' : 'No Líder'}</span>

          <label htmlFor="cotizacion">Cotización :</label>
          <input
            onChange={(event) => {
              actualizar('cotizacion', event.target.value)
            }}
            value={jugador.cotizacion}
            type="number"
            name="cotizacion"
            required
            min="0"
          />
          <span>{jugador.cotizacion}</span>

          <div className="buttonConteiner">
            <button className="secondary-button" onClick={() => history.back()}>
              Volver
            </button>
            <button onClick={create} className="primary-button">
              Guardar
            </button>
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
