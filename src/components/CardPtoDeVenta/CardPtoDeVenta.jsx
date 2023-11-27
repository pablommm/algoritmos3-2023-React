//import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
import './CardPtoDeVenta.css'

function CardPtoDeVenta({ item }) {
  return (
    <>
      <div className="parteInferior">
        <div className="primeraFila">
          <div className="elemento1">
            <i className="fa-solid fa-location-dot "></i>
            <span>{item.direccion}</span>
          </div>
          <div className="elemento3">
            <i className="fa-solid fa-clipboard-user"></i>
            <span>{item.stockDeSobres} sobres</span>
          </div>
        </div>
      </div>
      <span className="terceraFila">{item.tipo}</span>
    </>
  )
}

export default CardPtoDeVenta
