import "./Searchbar.css"
import { Outlet } from "react-router-dom"


function template() {
  return (
    <><section className="searchbar-container">
      <div className="searchbar">
        <input type="text" placeholder="Buscar..." />
        <button type="submit"><i id="id_lupa" className="fa fa-search sarasa"></i></button>
      </div>
    </section>
    <div>
    <Outlet></Outlet>
    </div>

    </>
  )
}

export default template
