//import React from "react"
import './SeleccionMenu.css'
/* import '../CardJugador/CardJugador.css' */

function SeleccionMenu() {
  return (
    <div className="selecionCard">
      <div className='nombrePais'>
        <h2>Argentina</h2>
      </div>
      <div className="botonesMenu">
        <div>
          <i className="fa-solid fa-pencil"></i>
        </div>
        <div>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  )
}

export default SeleccionMenu
