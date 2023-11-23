//import "./Plantilla.css"
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
//import SeleccionForm from '../SeleccionForm/SeleccionForm'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Template({ data }) {
  const navigate = useNavigate()

  return (
    <>
      <div className="navbar-container">
        {/*  {<span className="navbar-title">{data.title}</span>} */}
        {<span className="navbar-title">{data.title()}</span>}
      </div>

      <Outlet></Outlet>

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
          onClick={() => navigate('/plantilla/figuritas')}
        >
          account_box
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/jugadores')}
        >
          directions_run
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/puntosDeVenta')}
        >
          storefront
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/selecciones')}
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
