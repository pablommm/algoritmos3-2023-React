import "./cardJugador.css"
//import React from "react"

function template() {
  return (
    <>
      <div className="main-container">
        <div className="nombre">
        <div className="jugadorIcon"></div>
        <div className="nombre"></div>
        <div className="botonesEdicion">
          <div>delete</div>
          <div>lapiz</div>
        </div>

        </div>
        <div className="datosJugador">
          <div className="primeraFila">
            <div>fecha</div>
            <div>camiseta</div>
            <div>argentina</div>
          </div>
          <div className="segundaFila">
          <div>delantero</div>
          <div>1.88 mts</div>
          <div> 73kg</div>
          </div>
          <div className="terceraFila">
            U$S 100.000.000
          </div>

        </div>

      </div>
      
    </>
  )
}

export default template
