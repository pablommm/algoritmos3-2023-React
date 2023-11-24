import './Searchbar.css'
/* import '../../../Maquetado/CSS/searchbar.css' */
import { Outlet, useOutletContext } from 'react-router-dom'
import { useNavigate, useLoaderData, useLocation } from 'react-router-dom'
import '../../App.jsx'



function template({ data,component }) {
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
      
        <div className='sub-main-container'>
              {/* <Outlet></Outlet>  */}
     
          {data.title()}
          {data.title()}

          <span
            id="id_add"
            className="material-symbols-outlined plus-icon"
            onClick={() => data.navegacion()}
          >
            add
          </span>
        </div>
      </div>

      </div>
    </>
  )
}

export default template

function subRuta() {
  return location
}
