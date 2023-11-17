import "./Searchbar.css"
import { Outlet, useOutletContext } from "react-router-dom"


function template() {
  const [dataBusquedaFigurita] = useOutletContext()

  return (
    <><section className="searchbar-container">
      <div className="searchbar">
        <input type="text" placeholder="Buscar..." />
        <button type="submit"><i id="id_lupa" className="fa fa-search sarasa"></i></button>
      </div>
    </section>
    <div>
      <span>{dataBusquedaFigurita.realizar()}</span>
      <Outlet></Outlet>
      <span id="id_add" className="material-symbols-outlined plus-icon">add</span>
    </div>

    </>
  )
}

export default template
