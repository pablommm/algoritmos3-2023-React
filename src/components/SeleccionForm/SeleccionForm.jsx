import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'

import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'

function SeleccionForm() {
  return (
    <div className="main-container">
      <div className="sub-main-container form-container">
        <div className="formulario">
          <form action="p" method="POST">
            <label htmlFor="nombre_jugador">Nombre del Jugador:</label>
            <input type="text" name="nombre_jugador" required />

            <label htmlFor="confederacion">Confederación:</label>
            <select className="select">
              <option value="CONMEBOL">CONMEBOL</option>
              <option value="UEFA">UEFA</option>
              <option value="CAF">CAF</option>
              <option value="AFC">AFC</option>
              <option value="CONCACAF">CONCACAF</option>
              <option value="OFC">OFC</option>
            </select>

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
