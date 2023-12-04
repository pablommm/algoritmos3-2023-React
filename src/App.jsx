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
import { puntoDeVentaService } from './services/puntoDeVenta.service.js'
import { jugadorService } from './services/jugador.service.js'
import { figuritaService } from './services/figurita.service.js'
import { seleccionService } from './services/seleccion.service.js'

const dataJugador = {
  navegacion: 'jugador-form',
  title: 'Jugador',
  icon: 'fa-person-running',
  component: (item) => <CardJugador item={item}></CardJugador>,
  datosService: async (campoBusqueda) =>
    jugadorService.allInstances(campoBusqueda),
  deleteService: async (id) => jugadorService.delete(id),
}
const dataSeleccion = {
  navegacion: 'seleccion-form',
  title: 'Seleccion',
  icon: 'fa-flag',
  component: () => null,
  datosService: async (campoBusqueda) =>
    seleccionService.allInstances(campoBusqueda),
  deleteService: async (id) => seleccionService.delete(id),
}
const dataPtoDeVenta = {
  navegacion: 'puntoVenta-form',
  title: 'Punto de venta',
  icon: 'fa-store',
  component: (item) => <CardPtoDeVenta item={item}></CardPtoDeVenta>,
  datosService: async (campoBusqueda) =>
    puntoDeVentaService.allInstances(campoBusqueda),
  deleteService: async (id) => puntoDeVentaService.delete(id),
}
const dataFiguritas = {
  navegacion: 'figuritas-form',
  title: 'Figuritas',
  icon: 'fa-clipboard-user',
  component: (item) => <CardFigu item={item}></CardFigu>,
  datosService: async (campoBusqueda) =>
    figuritaService.allInstances(campoBusqueda),
  deleteService: async (id) => figuritaService.delete(id),
}

export default function App() {
  const [titulo, setTitulo] = useState('')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/plantilla" element={<Plantilla titulo={titulo} />}>
          <Route path="Home" element={<Home setTitulo={setTitulo} />} />
          <Route
            path="figuritas"
            element={<Buscador setTitulo={setTitulo} data={dataFiguritas} />}
          />
          <Route
            path="jugadores"
            element={<Buscador setTitulo={setTitulo} data={dataJugador} />}
          />
          <Route
            path="puntosDeVenta"
            element={<Buscador setTitulo={setTitulo} data={dataPtoDeVenta} />}
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

          <Route
            path="figuritas-form/editar/:id"
            element={<FiguritasForm setTitulo={setTitulo} />}
          />

          <Route
            path="seleccion-form/editar/:id"
            element={<SeleccionForm setTitulo={setTitulo} />}
          />

          <Route
            path="jugador-form/editar/:id"
            element={<JugadorForm setTitulo={setTitulo} />}
          />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}
