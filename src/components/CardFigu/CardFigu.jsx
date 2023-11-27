import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
import './CardFigu.css'

function CardFigu({ item }) {
  const isOnFireIcon = () => {
    if (item.onFire) {
      return '#f44336'
    } else {
      return '#999999'
    }
  }

  const isOnFireLabel = () => {
    if (!item.onFire) {
      return 'line-through'
    }
  }

  return (
    <>
      <div className="parteInferior">
        <div className="segundaFila">
          <div className="elemento1">
            <i className="fa-solid fa-hashtag"></i>
            <span>{item.numero}</span>
          </div>
          <div className="elemento2">
            <i
              className="fa-solid fa-fire-flame-curved"
              style={{ color: isOnFireIcon() }}
            ></i>
            <span> </span>
            <span style={{ textDecoration: isOnFireLabel() }}>On Fire</span>
          </div>
          <div className="elemento3">
            <i className="fa-solid fa-print"></i>
            <span> </span>
            <span>{item.nivelDeImpresion}</span>
          </div>
        </div>
        <div className="terceraFila">{item.valoracionFigurita}</div>
      </div>
    </>
  )
}

export default CardFigu
