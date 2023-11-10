import './App.css'
import SeleccionForm from './SeleccionForm/SeleccionForm'
import { ChakraProvider } from '@chakra-ui/react'

//import Login from "./Login/Login"
/*
import Home from "./Home/Home"*/
import JugadorForm from './JugadorForm/JugadorForm'
import PuntoDeVentaForm from './PuntoDeVentaForm/PuntoDeVentaForm'

function App() {
  return (
    <ChakraProvider>
      <JugadorForm />
    </ChakraProvider>
  )
  /*
    <div>
      <SeleccionForm />
    </div>
*/



}

export default App
