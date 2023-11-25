//import React from "react"

import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/jugador.css'
import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'

function PuntoDeVentaForm() {
  return (
    <div className="sub-main-container form-container">
      <div className="formulario">
        <form action="p" method="POST">
          <label htmlFor="nombre">Nombre del Punto de Venta:</label>
          <input type="text" name="nombre" required />

          <label htmlFor="direccion">Dirección:</label>
          <input type="text" name="direccion" required />

          <label htmlFor="coordenada_x">Coordenada X:</label>
          <input type="number" name="coordenada_x" step="any" required />

          <label htmlFor="coordenada_y">Coordenada Y:</label>
          <input type="number" name="coordenada_y" step="any" required />

          <label htmlFor="sobres_disponibles">Sobres Disponibles:</label>
          <input type="number" name="sobres_disponibles" required min="0" />

          <label htmlFor="pedidos_pendientes">Pedidos Pendientes:</label>
          <input type="number" name="pedidos_pendientes" required min="0" />

          <label htmlFor="tipo_negocio">Tipo de Negocio:</label>
          <select name="tipo_negocio" className="select">
            <option value="Kiosko">Kiosko</option>
            <option value="Supermercado">Supermercado</option>
          </select>

          <button className="secondary-button" onClick={() => history.back()} >Volver</button>
          <button className="primary-button">Guardar</button>
        </form>
      </div>
    </div>
  )
}

export default PuntoDeVentaForm
