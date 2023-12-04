import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'

import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'
import '../../../Maquetado/CSS/footer.css'
import './JugadorForm.css'
/* import { useOnInit } from '../../customHooks/hooks' */
import { useNavigate } from 'react-router-dom'
import { useLocation, useParams } from 'react-router-dom'
import { mostrarMensajeError } from '../../util/error-handling'
import { useEffect, useState } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { Jugador } from '../../dominio/jugador'
import { jugadorService } from '../../services/jugador.service'
import { seleccionService } from '../../services/seleccion.service'
import { Toggle } from '../ToggleButton/ToggleButton'

function JugadorForm({ setTitulo }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const editar = location.pathname.includes('editar')
  const [visualizar, setVisualizar] = useState(false)
  const [selecciones, setSelecciones] = useState([])
  const [jugador, setJugador] = useState(new Jugador())
  const [errorMessage, setErrorMessage] = useState('')
  const snackbarOpen = !!errorMessage

  const traerJugador = async () => {
    try {
      const jugador = await jugadorService.getById(id)
      setJugador(jugador)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const traerSelecciones = async () => {
    try {
      const selecciones = await seleccionService.allInstances()
      setSelecciones(selecciones)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const actualizar = (referencia, valor) => {
    jugador[referencia] = valor
    setJugador({ ...jugador })
  }

  const create = async () => {
    try {
      await jugadorService.create(jugador)
      navigate(`/plantilla/jugadores`)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const guardar = async () => {
    try {
      await jugadorService.update(jugador)
      navigate(`/plantilla/jugadores`)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const logState = (state) => {
    console.log('Toggled:', state)
  }

  useEffect(() => {
    traerSelecciones()
    if (editar) {
      setTitulo('Editar Jugador')
      traerJugador()
      /* console.log(
        selecciones.find((seleccion) => seleccion.id === jugador.seleccion.id),
      ) */
    } else {
      setTitulo('Nuevo Jugador')
    }
  }, [location.pathname])

  return (
    <main className="main-container">
      <section className="sub-main-container  form-container">
        {visualizar ? (
          <div className="visualizacion">
            <div className="visualizacion-item">
              <label htmlFor="nombre">Nombre:</label>
              <span>{jugador.nombre}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="apellido">Apellido:</label>
              <span>{jugador.apellido}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="fechaDeNacimiento">Fecha de nacimiento:</label>
              <span>{jugador.fechaDeNacimiento}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="altura">Altura:</label>
              <span>{jugador.altura}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="peso">Peso:</label>
              <span>{jugador.peso}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="nroDeCamiseta">Nro de Camiseta:</label>
              <span>{jugador.nroDeCamiseta}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="seleccion">Selección:</label>
              <span>
                {selecciones.find((it) => it.id == jugador.seleccion.id).pais}
              </span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="anioDebut">Año de Debut en la selección:</label>
              <span>{jugador.anioDebut}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="posicion">Posición:</label>
              <span>{jugador.posicion}</span>
            </div>
            <div className="visualizacion-item">
              <span>{jugador.lider ? 'Es Lider' : 'No es Lider'}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="cotizacion">Cotización:</label>
              <span>{jugador.cotizacion}</span>
            </div>
            <button
              className="secondary-button"
              onClick={() => navigate(`/plantilla/jugadores`)}
            >
              Volver
            </button>
          </div>
        ) : (
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
                <button
                  className="secondary-button"
                  onClick={() => navigate(`/plantilla/jugadores`)}
                >
                  Volver
                </button>
                <button
                  onClick={editar ? guardar : create}
                  className="primary-button"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
      {editar ? (
        <Toggle
          label="Toggle me"
          toggled={visualizar}
          onClick={logState}
          setVisualizar={setVisualizar}
        />
      ) : (
        <></>
      )}
      <Snackbar
        open={snackbarOpen}
        variant="error"
        autoHideDuration={1800}
        onClose={() => setErrorMessage(false)}
        style={{ marginBottom: '8rem', fontSize: '400rem' }}
      >
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
    </main>
  )
}

export default JugadorForm
