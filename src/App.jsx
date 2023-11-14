
// import './App.css'
// //import SeleccionForm from './SeleccionForm/SeleccionForm'
// //import { ChakraProvider } from '@chakra-ui/react'
// //import Login from "./Login/Login"
// /*import Home from "./Home/Home"*/
// //import JugadorForm from '../src/Components/JugadorForm/JugadorForm'
// //import PuntoDeVentaForm from './PuntoDeVentaForm/PuntoDeVentaForm'
// //import { Login } from './Login/Login'
// //import { Footer } from './components/footer/footer'
// import Plantilla from '../src/Components/Plantilla/Plantilla'
// function App() {
//   return (
//     /* <ChakraProvider> */
//     /*  </ChakraProvider> */
//     <>
//       {/* <SeleccionForm /> */}
//       {/* <Login /> */}
//       < Plantilla/> 
//       {/* <JugadorForm/> */}
//     </>
//   )

// }

import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import JugadorForm from "./components/JugadorForm/JugadorForm.jsx"
import Home from "./components/Home/Home.jsx"
import Plantilla from "./components/Plantilla/Plantilla.jsx"
import Login from "./Login/Login.jsx"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jugador-form" element={<JugadorForm />} />
        <Route path="Home" element={<Home />} />
        <Route path="/plantilla" element={<Plantilla />} />
        <Route path="*" element={<h1>404</h1>} />
        
      </Routes>
    </Router>
  )
}






