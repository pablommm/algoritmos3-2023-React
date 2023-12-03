import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'

import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'
import { useState } from 'react'
import { useOnInit } from '../../customHooks/hooks'
import { Seleccion } from '../../dominio/seleccion'
import { seleccionService } from '../../services/seleccion.service'

function SeleccionForm({ setTitulo }) {

  const[confederaciones,setConfederaciones] = useState([])
  const[seleccion,setSelecion] = useState(new Seleccion())

  const actualizar = (referencia, valor) => {
    seleccion[referencia] = valor
    setSelecion({ ...seleccion })
  }

  const traerConfederaciones = async () => {
    try{
      const confederaciones = await seleccionService.getConfederaciones()
      setConfederaciones(confederaciones)
    }catch (error){
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  useOnInit(() => { 
    setTitulo("Nueva Seleccion")
    traerConfederaciones()
  })

  return (
    <div className="main-container">
      <div className="sub-main-container form-container">
        <div className="formulario">
          <form action="p" method="POST">
            <label htmlFor="pais">Pais:</label>
            <input
              onChange={(event) => {
                actualizar("nombre_seleccion", event.target.value)
              }}
              value={seleccion.pais}            
              type="text"
              name="nombre_seleccion"
              required
            />
            <label htmlFor="confederacion">Confederación:</label>
            <select
              className="select"
              name="confederacion"
              value={seleccion.confederacion}
              onChange={(event =>{actualizar('confederacion', event.target.value)})}
            >
              {confederaciones.map((confederacion) => (
                <option key={confederacion} value={confederacion}>
                  {confederacion}
                </option>
              ))}
             {/*  <option value="CONMEBOL">CONMEBOL</option>
              <option value="UEFA">UEFA</option>
              <option value="CAF">CAF</option>
              <option value="AFC">AFC</option>
              <option value="CONCACAF">CONCACAF</option>
              <option value="OFC">OFC</option> */}
            </select>
             <span>{seleccion.confederacion}</span> 


            <label htmlFor="copas_mundo">Cantidad de Copas del Mundo:</label>
            <input type="number" name="copas_mundo" required min="0" />
            <div className="buttonContainer">
              <button className="secondary-button" onClick={() => history.back()}>Volver</button>
              <button className="primary-button">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SeleccionForm
