//import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
import './CardPtoDeVenta.css'

function template() {
  return (
    <>
      <div className="parteInferior">
        <div className="primeraFila">
          <div className="elemento1">
            <i className="fa-solid fa-location-dot "></i> por ahi{' '}
          </div>
          <div className="elemento3">
            <i className="fa-regular fa-flag"></i>200 sobres
          </div>
        </div>
        <div className="terceraFila">TIPO KIOSCO</div>
      </div>
    </>
  )
}

export default template
