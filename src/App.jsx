import './App.css'
import SeleccionForm from './SeleccionForm/SeleccionForm'
import { ChakraProvider } from '@chakra-ui/react'

//import Login from "./Login/Login"
/*
import Home from "./Home/Home"*/
import JugadorForm from './JugadorForm/JugadorForm'
import PuntoDeVentaForm from './PuntoDeVentaForm/PuntoDeVentaForm'
import { Login } from './Login/Login'
import { Footer } from './components/footer/footer'

function App() {
  return (
    /* <ChakraProvider> */
    /*  </ChakraProvider> */
    <>
      <Login />
      <Footer />
    </>
  )
  /*
    <div>
      <SeleccionForm />
    </div>
*/



}

export default App
