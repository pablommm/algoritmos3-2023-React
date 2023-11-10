import '../../Maquetado/CSS/general.css'
import '../../Maquetado/CSS/form.css'
import '../../Maquetado/CSS/button.css'
import '../../Maquetado/CSS/input.css'

function SeleccionForm() {
  
  return (      
  <section className="sub-main-container">
      <div className="formulario">
          <form action="p" method="POST">
              <label htmlFor="nombre_jugador">Nombre del Jugador:</label>
              <input type="text" name="nombre_jugador" required></input>

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
              <input type="number" name="copas_mundo" required min="0"> </input>

              <button className="secondary-button">Volver</button>
              <button className="primary-button">Guardar</button>
        
        </form>
      </div>
  </section>
  
  )
  
}

export default SeleccionForm
