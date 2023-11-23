import './Searchbar.css'
import { Outlet, useOutletContext } from 'react-router-dom'
import { useNavigate, useLoaderData, useLocation } from 'react-router-dom'
import '../../App.jsx'



function template({data}) {
/*   const navigate = useNavigate()
  const location = useLocation() */
  const [dataBusquedaFigurita] = useOutletContext()
  const ComponentToRender = data
  return (
    <>
      <section className="searchbar-container">
        <div className="searchbar">
          <input type="text" placeholder="Buscar..." />
          <button type="submit">
            <i id="id_lupa" className="fa fa-search sarasa"></i>
          </button>
        </div>
      </section>
      <div>
        <span>{dataBusquedaFigurita.realizar()}</span>
        <Outlet></Outlet>
        {ComponentToRender && <ComponentToRender />}
        <span
          id="id_add"
          className="material-symbols-outlined plus-icon"
          onClick={() => data}
        >
          add
        </span>
      </div>
    </>
  )
}

export default template

function subRuta() {
  return location
}
