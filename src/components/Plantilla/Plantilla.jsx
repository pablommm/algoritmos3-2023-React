import './Plantilla.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
//import SeleccionForm from '../SeleccionForm/SeleccionForm'
import { Outlet, useNavigate } from 'react-router-dom'
//import { useState } from 'react'
import Plantilla_MainComponent from '../Plantilla_MainComponent/Plantilla_MainComponent.jsx'
import { useEffect } from 'react'






function Plantilla({ setTitulo, titulo,data }) {
  const navigate = useNavigate()

  setTitulo(data.title())

  return (
    <>
      <div className="navbar-container">
        {/*  {<span className="navbar-title">{data.title}</span>} */}
        {<span className="navbar-title"> {titulo} </span>}
      </div>
      {/*
        <Plantilla_MainComponent data={data} actualizarTitulo={actualizarTitulo} />  
      */}
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

export default Plantilla
