import './Searchbar.css'
/* import '../../../Maquetado/CSS/searchbar.css' */
import { Outlet, useOutletContext } from 'react-router-dom'
import { useNavigate, useLoaderData, useLocation } from 'react-router-dom'
import '../../App.jsx'

const titleMap = [
  {
    path: '/plantilla/searchbar/figu',
    subRuta: '/plantilla/searchbar/figu/Figuritas',
  },
  {
    path: '/plantilla/searchbar/jugador',
    subRuta: '/plantilla/searchbar/jugador/jugadorFrom',
  },
  {
    path: '/plantilla/searchbar/ptdeventa',
    subRuta: '/plantilla/searchbar/ptdeventa/CardPtoVenta',
  },
  {
    path: '/plantilla/searchbar/seleccionMenu',
    subRuta: '/plantilla/searchbar/seleccionMenu',
  },
]

function template({ data }) {
  /*   const navigate = useNavigate()
  const location = useLocation() */
  return (
    <>
      <div className="searchBar">
        {/* {<span>{data.accion()}</span>} */}
        <section className="searchbar-container">
          <div className="searchbar">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">
              <i id="id_lupa" className="fa fa-search sarasa"></i>
            </button>
          </div>
        </section>
        <div>
          {/* <Outlet></Outlet>  */}

          {/* <Card prueba={data.title()} /> */}

          <span
            id="id_add"
            className="material-symbols-outlined plus-icon"
            onClick={() => data.navegacion()}
          >
            add
          </span>
        </div>
      </div>
    </>
  )
}

export default template

function subRuta() {
  return location
}
