//import "./Plantilla.css"
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
//import SeleccionForm from '../SeleccionForm/SeleccionForm'
import {
  Outlet,
  useNavigate
} from 'react-router-dom'
import { useState } from 'react'


function Template({data}) {
  const navigate = useNavigate()

  return (
    <>
      <div className="navbar-container">
        {/* <span className="navbar-title">{data.title()}</span> */}
        <span className="navbar-title">{}</span>
      </div>

      <Outlet context={[dataBusquedaFigurita]} ></Outlet>
      
      <footer className="footer">
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/Home')}
        >
          home
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/searchbar/figu')}
        >
          account_box
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/searchbar/jugador')}
        >
          directions_run
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/searchbar/ptdeventa')}
        >
          storefront
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/searchbar/seleccionMenu')}
        >
          flag
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/')}
        >
          logout
        </span>
      </footer>
    </>
  )
}

export const dataBusquedaFigurita = {
  realizar: () => 'hola',
}

export default Template
