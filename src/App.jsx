import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import JugadorForm from "./components/JugadorForm/JugadorForm.jsx"
import Home from "./components/Home/Home.jsx"
import Plantilla from "./components/Plantilla/Plantilla.jsx"
import Login from "./Login/Login.jsx"
import CardSobre from "./components/CardPtoDeVenta/CardPtoDeVenta.js"
import Searchbar from "./components/Searchbar/Searchbar.jsx"
import CardPtoDeVenta from "./components/CardPtoDeVenta/CardPtoDeVenta.js"
import CardJugador from './components/CardJugador/CardJugador.jsx'
import CardFigu from "./components/CardFigu/CardFigu.jsx"
import SeleccionMenu from "./components/SeleccionMenu/SeleccionMenu.jsx"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jugador-form" element={<JugadorForm />} />
        <Route path="/plantilla" element={<Plantilla />}>
            <Route path="Searchbar" element={<Searchbar />} >        {/*  se abre nuevamente el componente para que contenga hijos  */}
                  <Route path="jugador" element={<CardJugador />} />
                  <Route path="ptdeventa" element={<CardPtoDeVenta />} />
                  <Route path="figu" element={<CardFigu />} />
                  <Route path="seleccionMenu" element={<SeleccionMenu />} />
            </Route>
          <Route path="Home" element={<Home />} />
        </Route>
        <Route path="/Card" element={<CardSobre />} />
        <Route path="*" element={<h1>404</h1>} />
        {/* <Route path="/plantilla2" element={<Plantilla />}>
            <Route path="" element={<Home />} />
        </Route> */}
        
        
      </Routes>
    </Router>
  )
}






