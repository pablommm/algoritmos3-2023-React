import './Searchbar.css'
/* import '../../../Maquetado/CSS/searchbar.css' */
import { Outlet, useOutletContext } from 'react-router-dom'
import { useNavigate, useLoaderData, useLocation } from 'react-router-dom'
import '../../App.jsx'
import Card from '../Card/Card.jsx'


function template({ data, component }) {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const navigate = useNavigate()
  /*  const location = useLocation() */
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
        <div className='sub-main-container'>
      
              {/* <Outlet></Outlet>  */}
          <Card>
            {component}
          </Card>
          {/* <span>{data.component()}</span> */}
          {/* {data.title()} */}

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

export default template