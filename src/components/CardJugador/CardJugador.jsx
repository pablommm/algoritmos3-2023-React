//import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
import './CardJugador.css'

function CardJugador({ item }) {
  return (
    <>
      <div className="parteInferior">
        <div className="primeraFila">
          <div className="elemento1">{item.fechaDeNacimiento}</div>
          <div className="elemento2">
            <i className="fa-solid fa-shirt "></i> {item.nroDeCamiseta}
          </div>
          <div className="elemento3">
            <i className="fa-regular fa-flag"></i>
            {item.seleccion.pais}
          </div>
        </div>
        <div className="segundaFila">
          <div className="elemento1">{item.posicion}</div>
          <div className="elemento2">
            <i className="fa-solid fa-up-down altura"></i>
            {item.altura} mts
          </div>
          <div className="elemento3">
            <i className="fa-solid fa-weight-scale"></i>
            {item.peso} kg
          </div>
        </div>
        <div className="terceraFila">U$S {item.cotizacion}</div>
      </div>
    </>
  )
}

export default CardJugador
