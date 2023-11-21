import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JugadorForm from './components/JugadorForm/JugadorForm.jsx'
import Home from './components/Home/Home.jsx'
import Plantilla from './components/Plantilla/Plantilla.jsx'
import Login from './Login/Login.jsx'
import Searchbar from './components/Searchbar/Searchbar.jsx'
import CardPtoDeVenta from './components/CardPtoDeVenta/CardPtoDeVenta.js'
import CardJugador from './components/CardJugador/CardJugador.jsx'
import CardFigu from './components/CardFigu/CardFigu.jsx'
import SeleccionMenu from './components/SeleccionMenu/SeleccionMenu.jsx'
import PuntoDeVentaForm from './components/PuntoDeVentaForm/PuntoDeVentaForm.jsx'
import FiguritasForm from './components/Figuritas/Figuritas.jsx'
import Seleccion from './components/SeleccionForm/SeleccionForm.jsx'

const dataJugador = { accion: () => navigate('plantilla/jugador-form') }

const dataLogin = { accion: () => 'prueba' }

const dataBusquedaFigurita = {
  accion: async (figuritaService, filtro) =>
    figuritaService.todasLasFiguritas(filtro),
}

const dataHome = {
  accion: async (homeService) => homeService.getCantidadesHome(),
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login data={dataLogin} />} />

        <Route path="/plantilla" element={<Plantilla />}>
          <Route path="Searchbar" element={<Searchbar />}>
            {' '}
            {/*  se abre nuevamente el componente para que contenga hijos  */}
            <Route
              path="jugador"
              element={<CardJugador data={dataJugador} />}
            />
            <Route path="ptdeventa" element={<CardPtoDeVenta />} />
            <Route path="figu" element={<CardFigu />} />
            <Route path="seleccionMenu" element={<SeleccionMenu />} />
          </Route>
          <Route path="Home" element={<Home data={dataHome} />} />
          <Route path="jugador-form" element={<JugadorForm />} />
          <Route
            path="figu-form"
            element={<FiguritasForm data={dataBusquedaFigurita} />}
          />
          <Route path="puntoVenta-form" element={<PuntoDeVentaForm />} />
          <Route path="Seleccion" element={<Seleccion />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}
