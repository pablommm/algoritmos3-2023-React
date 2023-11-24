import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'

import './CardFigu.css'
//import React from "react"

function CardFigu() {
  return (
    <>
      <div className="parteInferior">
        <div className="segundaFila">
          <div className="elemento1">
            <i className="fa-solid fa-hashtag"></i> 98
          </div>
          <div className="elemento2">
            <i className="fa-solid fa-fire-flame-curved"></i> on fire
          </div>
          <div className="elemento3">
            <i className="fa-solid fa-print"></i> bajo
          </div>
        </div>
        <div className="terceraFila">Valoracion 342</div>
      </div>
    </>
  )
}

export default CardFigu
