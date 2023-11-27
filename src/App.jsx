import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import JugadorForm from './components/JugadorForm/JugadorForm.jsx'
import Home from './components/Home/Home.jsx'
import Plantilla from './components/Plantilla/Plantilla.jsx'
import Login from './components/Login/Login.jsx'
import Plantilla_MainComponent from './components/Plantilla_MainComponent/Plantilla_MainComponent.jsx'
import CardPtoDeVenta from './components/CardPtoDeVenta/CardPtoDeVenta.jsx'
import CardJugador from './components/CardJugador/CardJugador.jsx'
import CardFigu from './components/CardFigu/CardFigu.jsx'
import PuntoDeVentaForm from './components/PuntoDeVentaForm/PuntoDeVentaForm.jsx'
import FiguritasForm from './components/FiguritasForm/FiguritasForm.jsx'
import SeleccionForm from './components/SeleccionForm/SeleccionForm.jsx'
import SeleccionMenu from './components/SeleccionMenu/SeleccionMenu.jsx'
import { puntoDeVentaService } from './services/puntoDeVenta.service.js'
import { jugadorService } from './services/jugador.service.js'
import { figuritaService } from './services/figurita.service.js'
import { mostrarMensajeError } from './util/error-handling.jsx'

const dataJugador = {
  navegacion: () => 'jugador-form',
  title: () => 'Jugador',
  datosService: (campoBusqueda) => jugadorService.allInstances(campoBusqueda),
}
const dataSeleccion = {
  navegacion: () => 'seleccion-form',
  title: () => 'Seleccion',
}
const dataPtoDeVenta = {
  navegacion: () => 'puntoVenta-form',
  title: () => 'Punto de venta',
  datosService: () => puntoDeVentaService.allInstances(),
}
const dataFiguritas = {
  navegacion: () => 'figuritas-form',
  title: () => 'Figuritas',
  datosService: () => figuritaService.allInstances(),
}

/* const dataJugador = {
  navegacion: () => 'jugador-form',
  title: () => 'Jugador',
  datosService: () => async () => {
    try {
      await jugadorService.allInstances()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  },
}

const dataSeleccion = {
  navegacion: () => 'seleccion-form',
  title: () => 'Seleccion',
}
const dataPtoDeVenta = {
  navegacion: () => 'puntoVenta-form',
  title: () => 'Punto de venta',
  datosService: () => async () => {
    try {
      await puntoDeVentaService.allInstances()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  },
}
const dataFiguritas = {
  navegacion: () => 'figuritas-form',
  title: () => 'Figuritas',
  datosService: () => async () => {
    try {
      await figuritaService.allInstances()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  },
} */

const dataLogin = { accion: () => 'prueba' }

/* 
const dataBusquedaFigurita = {
  accion: async (figuritaService, filtro) =>
    figuritaService.todasLasFiguritas(filtro),
} */

const dataHome = {
  accion: async (homeService) => homeService.getCantidadesHome(),
  title: () => 'Home',
}

export default function App() {
  const [titulo, setTitulo] = useState('')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login data={dataLogin} />} />
        <Route path="/plantilla" element={<Plantilla titulo={titulo} />}>
          <Route
            path="Home"
            element={<Home setTitulo={setTitulo} data={dataHome} />}
          />
          <Route
            path="figuritas"
            element={
              <Plantilla_MainComponent
                setTitulo={setTitulo}
                data={dataFiguritas}
                component={<CardFigu />}
              />
            }
          />
          <Route
            path="jugadores"
            element={
              <Plantilla_MainComponent
                setTitulo={setTitulo}
                data={dataJugador}
                component={<CardJugador />}
              />
            }
          />
          <Route
            path="puntosDeVenta"
            element={
              <Plantilla_MainComponent
                setTitulo={setTitulo}
                data={dataPtoDeVenta}
                component={<CardPtoDeVenta />}
              />
            }
          />
          <Route
            path="selecciones"
            element={
              <Plantilla_MainComponent
                setTitulo={setTitulo}
                data={dataSeleccion}
                component={<SeleccionMenu />}
              />
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
            element={<JugadorForm setTitulo={setTitulo} data={dataJugador} />}
          />
          <Route
            path="puntoVenta-form"
            element={
              <PuntoDeVentaForm setTitulo={setTitulo} data={dataPtoDeVenta} />
            }
          />
          <Route
            path="seleccion-form"
            element={
              <SeleccionForm setTitulo={setTitulo} data={dataSeleccion} />
            }
          />
          <Route
            path="figuritas-form"
            element={<FiguritasForm data={dataFiguritas} />}
          />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}
