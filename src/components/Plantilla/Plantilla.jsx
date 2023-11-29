import './Plantilla.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/nav'

function Plantilla({ titulo }) {
  return (
    <>
      <div className="navbar-container">
        {<span className="navbar-title"> {titulo} </span>}
      </div>
      <Outlet></Outlet>
      <Nav></Nav>
    </>
  )
}

export default Plantilla
