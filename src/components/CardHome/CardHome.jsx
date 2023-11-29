import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/login.css'
import '../../../Maquetado/CSS/home.css'
import './CardHome.css'

export const CardHome = ({ icon, cantidad, leyenda }) => {
  return (
    <div className="box">
      <i id="icono" className={icon}></i>
      <div>
        <h2>{cantidad}</h2>
        <p>{leyenda}</p>
      </div>
    </div>
  )
}
export default CardHome
