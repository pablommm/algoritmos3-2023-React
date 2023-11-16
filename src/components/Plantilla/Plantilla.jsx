//import "./Plantilla.css"
import "../../../Maquetado/CSS/general.css"
import "../../../Maquetado/CSS/searchbar.css"
import "../../../Maquetado/CSS/nav.css"
import "../../../Maquetado/CSS/Home.css"
import "../../../Maquetado/CSS/Footer.css"
import "../../../Maquetado/CSS/button.css"
//import SeleccionForm from '../SeleccionForm/SeleccionForm'
import { Outlet, useNavigate } from "react-router-dom"


function Template() {
  const navigate = useNavigate()

  return (


    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <script src="https://kit.fontawesome.com/e0d6dd6321.js" crossOrigin="anonymous"></script>
      <div className="navbar-container">
        <span className="navbar-title">titulo plantilla</span>
      </div>

       {/* <section className="searchbar-container">
        <div className="searchbar">
          <input type="text" placeholder="Buscar..." />
          <button type="submit"><i id="id_lupa" className="fa fa-search sarasa"></i></button>
        </div>
      </section>  */}

      <main className="main-container">
        <Outlet></Outlet>
        <span id="id_add" className="material-symbols-outlined plus-icon">add</span>
      </main>
      <footer className="footer">

        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/Home")} >home</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/Home")} >account_box</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/Home")} >directions_run</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/Home")} >storefront</span>
        <span id="id_footer" className="material-symbols-outlined" onClick={() => navigate("/")} >logout</span>
      </footer>
    </>

  )

}

export default Template