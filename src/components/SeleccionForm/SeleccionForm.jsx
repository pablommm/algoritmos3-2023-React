import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'

import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useOnInit } from '../../customHooks/hooks'
import { Seleccion } from '../../dominio/seleccion'
import { seleccionService } from '../../services/seleccion.service'
import { mostrarMensajeError } from '../../util/error-handling'
import { useLocation, useParams } from 'react-router-dom'
import { Snackbar, Alert } from '@mui/material'
import { Toggle } from '../ToggleButton/ToggleButton'

function SeleccionForm({ setTitulo }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const editar = location.pathname.includes('editar')
  const [visualizar, setVisualizar] = useState(false)
  const [confederaciones, setConfederaciones] = useState([])
  const [seleccion, setSeleccion] = useState(new Seleccion())
  const [errorMessage, setErrorMessage] = useState('')
  const snackbarOpen = !!errorMessage

  const traerSeleccion = async () => {
    try {
      const figurita = await seleccionService.getById(id)
      setSeleccion(figurita)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const traerConfederaciones = async () => {
    try {
      const confederaciones = await seleccionService.getConfederaciones()
      setConfederaciones(confederaciones)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const actualizar = (referencia, valor) => {
    seleccion[referencia] = valor
    setSeleccion({ ...seleccion })
  }

  const create = async () => {
    try {
      await seleccionService.create(seleccion)
      navigate(`/plantilla/selecciones`)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const guardar = async () => {
    try {
      await seleccionService.update(seleccion)
      navigate(`/plantilla/selecciones`)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const logState = (state) => {
    console.log('Toggled:', state)
  }

  /* useOnInit(() => {
    setTitulo('Nueva Seleccion')
    traerConfederaciones()
  }) */

  useEffect(() => {
    traerConfederaciones()
    if (editar) {
      setTitulo('Editar Selección')
      traerSeleccion()
    } else {
      setTitulo('Nueva Selección')
    }
  }, [location.pathname])

  return (
    <main className="main-container">
      <section className="sub-main-container form-container">
        {visualizar ? (
          <div className="visualizacion">
            <div className="visualizacion-item">
              <label htmlFor="pais">Pais:</label>
              <span>{seleccion.pais}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="confederacion">Confederación:</label>
              <span>{seleccion.confederacion}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="copasDelMundo">Copas del Mundo:</label>
              <span>{seleccion.copasDelMundo}</span>
            </div>
            <button
              className="secondary-button"
              onClick={() => navigate(`/plantilla/selecciones`)}
            >
              Volver
            </button>
          </div>
        ) : (
          <div className="formulario">
            <form action="p" method="POST">
              <label htmlFor="pais">Pais:</label>
              <input
                onChange={(event) => {
                  actualizar('pais', event.target.value)
                }}
                value={seleccion.pais}
                type="text"
                name="pais"
                required
              />
              <span>{seleccion.pais}</span>
              <label htmlFor="confederacion">Confederación:</label>
              <select
                className="select"
                name="confederacion"
                value={seleccion.confederacion}
                onChange={(event) => {
                  actualizar('confederacion', event.target.value)
                }}
              >
                {confederaciones.map((confederacion) => (
                  <option key={confederacion} value={confederacion}>
                    {confederacion}
                  </option>
                ))}
              </select>
              <span>{seleccion.confederacion}</span>

              <label htmlFor="copasDelMundo">
                Cantidad de Copas del Mundo:
              </label>
              <input
                onChange={(event) => {
                  actualizar('copasDelMundo', event.target.value)
                }}
                value={seleccion.copasDelMundo}
                type="number"
                name="copasDelMundo"
                required
                min="0"
              />
              <span>{seleccion.copasDelMundo}</span>

              <div className="buttonContainer">
                <button
                  className="secondary-button"
                  onClick={() => navigate(`/plantilla/selecciones`)}
                >
                  Volver
                </button>
                <button
                  className="primary-button"
                  onClick={editar ? guardar : create}
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

export default SeleccionForm
