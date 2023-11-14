//import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "../../../Maquetado/CSS/general.css"
import "../../../Maquetado/CSS/searchbar.css"
import "../../../Maquetado/CSS/nav.css"
import "../../../Maquetado/CSS/Home.css"
import "../../../Maquetado/CSS/Footer.css"
import "../../../Maquetado/CSS/button.css"
import "./CardPtoDeVenta.css"

function template() {
  return (
    <>
      <div className="cardJugador">
        <div className="parteSuperior">
          <div className="jugadorIcon">
          <i className="fa-solid fa-shop"></i>
          </div>
          <div className="nombre">El chumbo</div>
          <div className="botonesEdicion">
            <div><i className="fa-solid fa-trash"></i></div>
            <div><i className="fa-solid fa-pencil"></i></div>
          </div>

        </div>
        <div className="parteInferior">
          <div className="primeraFila">
          <div className="elemento1"><i className="fa-solid fa-location-dot "></i> por ahi </div>
            <div className="elemento3"><i className="fa-regular fa-flag"></i>200 sobres</div>
          </div>
          <div className="terceraFila">
          TIPO KIOSCO
          </div>

        </div>

      </div>

    </>
  )
}

export default template
