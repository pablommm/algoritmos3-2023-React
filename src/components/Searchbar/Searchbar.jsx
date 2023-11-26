import './Searchbar.css'
/* import '../../../Maquetado/CSS/searchbar.css' */
import { Outlet, useOutletContext } from 'react-router-dom'
import { useNavigate, useLoaderData, useLocation } from 'react-router-dom'
import '../../App.jsx'
import Card from '../Card/Card.jsx'
import { useOnInit } from '../../customHooks/hooks'
import { useState } from 'react'
import { mostrarMensajeError } from '../../util/error-handling.jsx'

function Searchbar({ setTitulo, data, component }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()

  /*  const location = useLocation() */
  const [datos, setDatos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const traerDatos = async () => {
    try {
      const datosCards = await data.datosService()
      setDatos(datosCards)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  setTitulo(data.title())
  useOnInit(traerDatos)

  return (
    <>
      <div className="searchBar">
        <section className="searchbar-container">
          <div className="searchbar">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">
              <i id="id_lupa" className="fa fa-search sarasa"></i>
            </button>
          </div>
        </section>
        <div className="sub-main-container">
          {datos.map((item) => (
            <Card key={item.id} item={item}>
              {component}
            </Card>
          ))}

          <span
            id="id_add"
            className="material-symbols-outlined plus-icon"
            onClick={() => navigate(`/plantilla/${data.navegacion()}`)}
          >
            add
          </span>
        </div>
      </div>
    </>
  )
}

export default Searchbar
