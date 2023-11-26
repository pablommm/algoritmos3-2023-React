import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import JugadorForm from './components/JugadorForm/JugadorForm.jsx'
import Home from './components/Home/Home.jsx'
import Plantilla from './components/Plantilla/Plantilla.jsx'
import Login from './components/Login/Login.jsx'
import Searchbar from './components/Searchbar/Searchbar.jsx'
import CardPtoDeVenta from './components/CardPtoDeVenta/CardPtoDeVenta.jsx'
import CardJugador from './components/CardJugador/CardJugador.jsx'
import CardFigu from './components/CardFigu/CardFigu.jsx'
import PuntoDeVentaForm from './components/PuntoDeVentaForm/PuntoDeVentaForm.jsx'
import FiguritasForm from './components/FiguritasForm/FiguritasForm.jsx'
import SeleccionForm from './components/SeleccionForm/SeleccionForm.jsx'
import SeleccionMenu from './components/SeleccionMenu/SeleccionMenu.jsx'

const dataJugador = {
  navegacion: () => 'jugador-form',
  title: () => 'Jugador',
}
const dataSeleccion = {
  navegacion: () => 'seleccion-form',
  title: () => 'Seleccion',
}
const dataPtoDeVenta = {
  navegacion: () => 'puntoVenta-form',
  title: () => 'Punto de venta',
}

const dataFiguritas = {
  navegacion: () => 'figuritas-form',
  title: () => 'Figuritas',
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
  const [titulo,setTitulo]= useState('')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login data={dataLogin} />} />

        <Route path="/plantilla" element={<Plantilla  titulo={titulo}/>}>
          <Route path="Home" element={<Home data={dataHome} />} />
          <Route
            path="figuritas"
            element={
              <Searchbar data={dataFiguritas} component={<CardFigu />} />
            }
          />
          <Route
            path="jugadores"
            element={
              <Searchbar data={dataJugador} component={<CardJugador />} />
            }
          />
          <Route
            path="puntosDeVenta"
            element={
              <Searchbar setTitulo={setTitulo} data={dataPtoDeVenta} component={<CardPtoDeVenta />} />
            }
          />
          <Route
            path="selecciones"
            element={
              <Searchbar data={dataSeleccion} component={<SeleccionMenu />} />
            }
          />
          <Route
            path="figu-form"
            element={
              <FiguritasForm
                data={dataFiguritas}
                component={<FiguritasForm />}
              />
            }
          />

          {/* FALTA FIGURITA FORM*/}

          <Route
            path="jugador-form"
            element={<JugadorForm data={dataJugador} />}
          />
          <Route
            path="puntoVenta-form"
            element={<PuntoDeVentaForm data={dataPtoDeVenta} />}
          />
          <Route
            path="seleccion-form"
            element={<SeleccionForm data={dataSeleccion} />}
          />
          <Route
            path="figuritas-form"
            element={<FiguritasForm data={dataSeleccion} />}
          />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}
