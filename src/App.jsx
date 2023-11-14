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

// export default App
import React from "react"
import "./App.css"
//import { Login } from "./Login/Login"
//import { Footer } from "./components/footer/footer"
//import Plantilla from "./Components/Plantilla/Plantilla"
import { Home } from "./components/Home/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"
//import Nav from "./components/Nav/Nav"

export default function App() {
  return (
    <Router>
      <Route path="/" component={home} />
      <Route path="/about" component={About} />
    </Router>
  )
}

function home() {
  return <Home/>
}

function About() {
  return <>about</>
}
