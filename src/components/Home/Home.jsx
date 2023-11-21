import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/login.css'
import '../../../Maquetado/CSS/home.css'
import { homeService } from '../../services/homeService'
import { HomeDominio } from '../../dominio/home'
import { mostrarMensajeError } from '../../util/error-handling'

export const Home = () => {
  const [cantidadesHome, setCantidadesHome] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const traerDatosHome = async () => {
    try {
      const cantidadesHome = await homeService.getCantidadesHome()
      setCantidadesHome(cantidadesHome)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  useOnInit(traerDatosHome)

  return (
    <>
      <title>Home</title>
      <div className="dashboard">
        <div className="box">
          <span id="id_footer2" className="material-symbols-outlined">
            account_box
          </span>
          <div>
            <h2>{cantidadesHome.traerDatosHome.cantidadPuntosDeVentas}</h2>
            {/* <h2>13</h2> */}
            <p>Figuritas Faltantes</p>
          </div>
        </div>
        <div className="box">
          <span id="id_footer3" className="material-symbols-outlined">
            account_box
          </span>
          <div>
            <h2>7</h2>
            <p>Figuritas Repetidas</p>
          </div>
        </div>
        <div className="box">
          <span id="id_footer" className="material-symbols-outlined">
            storefront
          </span>
          <div>
            <h2>0</h2>
            <p>Punto de Ventas</p>
          </div>
        </div>
        <div className="box">
          <span id="id_footer" className="material-symbols-outlined">
            person
          </span>
          <div>
            <h2>1</h2>
            <p>Usuarios Activos</p>
          </div>
        </div>
      </div>
    </>
  )
}
