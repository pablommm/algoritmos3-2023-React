import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import JugadorForm from './components/JugadorForm/JugadorForm.jsx'
import Home from './components/Home/Home.jsx'
import Plantilla from './components/Plantilla/Plantilla.jsx'
import Login from './components/Login/Login.jsx'
import Buscador from './components/Buscador/Buscador.jsx'
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
import { seleccionService } from './services/seleccion.service.js'

const dataJugador = {
  navegacion: 'jugador-form',
  title: 'Jugador',
  icon: 'fa-person-running',
  datosService: (campoBusqueda) => jugadorService.allInstances(campoBusqueda),
  deleteService: (id) => jugadorService.delete(id),
}
const dataSeleccion = {
  navegacion: 'seleccion-form',
  title: 'Seleccion',
  icon: 'fa-flag',
  datosService: (campoBusqueda) => seleccionService.allInstances(campoBusqueda),
  deleteService: (id) => seleccionService.delete(id),
}
const dataPtoDeVenta = {
  navegacion: 'puntoVenta-form',
  title: 'Punto de venta',
  icon: 'fa-store',
  datosService: (campoBusqueda) =>
    puntoDeVentaService.allInstances(campoBusqueda),
  deleteService: (id) => puntoDeVentaService.delete(id),
}
const dataFiguritas = {
  navegacion: 'figuritas-form',
  title: 'Figuritas',
  icon: 'fa-clipboard-user',
  datosService: (campoBusqueda) => figuritaService.allInstances(campoBusqueda),
  deleteService: (id) => figuritaService.delete(id),
}

const dataHome = {
  title: 'Home',
}

export default function App() {
  const [titulo, setTitulo] = useState('')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/plantilla"
          element={
            <Plantilla
              /* setTitulo={setTitulo} */
              titulo={titulo}
              /* data={dataPrueba} */
            />
          }
        >
          <Route
            path="Home"
            element={<Home setTitulo={setTitulo} data={dataHome} />}
          />
          <Route
            path="figuritas"
            element={
              <Buscador // searchbar y boton aniadir
                setTitulo={setTitulo}
                data={dataFiguritas}
                component={<CardFigu />}
              />
            }
          />
          <Route
            path="jugadores"
            element={
              <Buscador
                setTitulo={setTitulo}
                data={dataJugador}
                component={<CardJugador />}
              />
            }
          />
          <Route
            path="puntosDeVenta"
            element={
              <Buscador
                setTitulo={setTitulo}
                data={dataPtoDeVenta}
                component={<CardPtoDeVenta />}
              />
            }
          />
          <Route
            path="selecciones"
            element={<Buscador setTitulo={setTitulo} data={dataSeleccion} />}
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

          <Route
            path="jugador-form"
            element={<JugadorForm setTitulo={setTitulo} />}
          />
          <Route
            path="puntoVenta-form"
            element={<PuntoDeVentaForm setTitulo={setTitulo} />}
          />
          <Route
            path="seleccion-form"
            element={<SeleccionForm setTitulo={setTitulo} />}
          />
          <Route
            path="figuritas-form"
            element={<FiguritasForm setTitulo={setTitulo} />}
          />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}
