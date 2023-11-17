//import "./Plantilla.css"
import "../../../Maquetado/CSS/general.css"
import "../../../Maquetado/CSS/searchbar.css"
import "../../../Maquetado/CSS/nav.css"
import "../../../Maquetado/CSS/Home.css"
import "../../../Maquetado/CSS/Footer.css"
import "../../../Maquetado/CSS/button.css"
//import SeleccionForm from '../SeleccionForm/SeleccionForm'
import { Outlet, useNavigate, useLoaderData } from "react-router-dom"
import { useState } from "react"


function Template() {
  const navigate = useNavigate()
  /* const [prueba, setPrueba] = useState("messi") */


  return (


    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <script src="https://kit.fontawesome.com/e0d6dd6321.js" crossOrigin="anonymous"></script>
      <div className="navbar-container">
        <span className="navbar-title">titulo plantilla</span>
      </div>
        
        <Outlet context={[dataBusquedaFigurita]}></Outlet>
       
        
    
        
    
      
      <footer className="footer">

        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/plantilla/Home")} >home</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/plantilla/searchbar/figu")} >account_box</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/plantilla/searchbar/jugador")} >directions_run</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/plantilla/searchbar/ptdeventa")} >storefront</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/plantilla/searchbar/seleccionMenu")} >flag</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/")} >logout</span>
      </footer>
    </>

  )

}

export const dataBusquedaFigurita = {
  realizar: ()=>"hola"
}

export default Template

