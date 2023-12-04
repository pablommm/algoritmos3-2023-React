import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'

import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'
import { useState } from 'react'
import { useOnInit } from '../../customHooks/hooks'
import { Seleccion } from '../../dominio/seleccion'
import { seleccionService } from '../../services/seleccion.service'

function SeleccionForm({ setTitulo }) {
  const [confederaciones, setConfederaciones] = useState([])
  const [seleccion, setSelecion] = useState(new Seleccion())
  const [errorMessage, setErrorMessage] = useState('')

  const actualizar = (referencia, valor) => {
    seleccion[referencia] = valor
    setSelecion({ ...seleccion })
  }

  const traerConfederaciones = async () => {
    try {
      const confederaciones = await seleccionService.getConfederaciones()
      setConfederaciones(confederaciones)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  useOnInit(() => {
    setTitulo('Nueva Seleccion')
    traerConfederaciones()
  })

  const create = async () => {
    try {
      await seleccionService.create(seleccion)
      history.back()
      console.log('pepe')
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  return (
    <div className="main-container">
      <div className="sub-main-container form-container">
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

            <label htmlFor="copasDelMundo">Cantidad de Copas del Mundo:</label>
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
                onClick={() => history.back()}
              >
                Volver
              </button>
              <button className="primary-button" onClick={create}>
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SeleccionForm
