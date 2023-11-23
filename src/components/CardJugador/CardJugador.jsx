import './CardJugador.css'
//import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'

function template() {
  return (
    <>
      <div className="parteInferior">
        <div className="primeraFila">
          <div className="elemento1">10/10/1991</div>
          <div className="elemento2">
            <i className="fa-solid fa-shirt "></i> 9
          </div>
          <div className="elemento3">
            <i className="fa-regular fa-flag"></i>Argentina
          </div>
        </div>
        <div className="segundaFila">
          <div className="elemento1">Delantero</div>
          <div className="elemento2">
            <i className="fa-solid fa-up-down altura"></i>1.88 mts
          </div>
          <div className="elemento3">
            <i className="fa-solid fa-weight-scale"></i>73kg
          </div>
        </div>
        <div className="terceraFila">U$S 100.000.000</div>
      </div>
    </>
  )
}

export default template
