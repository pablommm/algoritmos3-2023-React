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
import PuntoDeVentaForm from './components/PuntoDeVentaForm/PuntoDeVentaForm.jsx'
import FiguritasForm from './components/Figuritas/Figuritas.jsx'
import Seleccion from './components/SeleccionForm/SeleccionForm.jsx'

const dataJugador = {
  navegacion: () => 'jugador-form',
  title: () => 'Jugador',
}
const dataSeleccion= {
  navegacion: () => 'seleccion-form',
  title: () => 'Seleccion',
}
const dataPtoDeVenta = {
  navegacion: () => 'puntoVenta-form',
  title: () => 'Punto de venta'
}

const dataLogin = { accion: () => 'prueba' }

/* 
const dataBusquedaFigurita = {
  accion: async (figuritaService, filtro) =>
    figuritaService.todasLasFiguritas(filtro),
} */

const dataHome = {
  accion: async (homeService) => homeService.getCantidadesHome(),
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login data={dataLogin} />} />

        <Route path="/plantilla" element={<Plantilla />}>
          <Route path="Home" element={<Home data={dataHome} component={<JugadorForm />}/>} />
          <Route path="figuritas" element={<Searchbar data={dataPtoDeVenta} component={<CardFigu />}/>} />
          <Route path="jugadores" element={<Searchbar data={dataJugador} component={<CardJugador />} />} />
          <Route path="puntosDeVenta" element={<Searchbar data={dataPtoDeVenta} component={<CardPtoDeVenta />}/>} />
          <Route path="selecciones" element={<Searchbar data={dataSeleccion} component={<JugadorForm />}/>} />
          <Route
            path="figu-form"
            element={<FiguritasForm data={dataPtoDeVenta} component={<JugadorForm />}/> }
          />

                    {/* FALTA FIGURITA FORM*/}

          <Route path="jugador-form" element={<JugadorForm data={dataJugador}/>} />
          <Route path="puntoVenta-form" element={<PuntoDeVentaForm data={dataPtoDeVenta}/>} />
          <Route path="seleccion-form" element={<Seleccion data={dataSeleccion}/>} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}
