import { useState } from "react"

function Searchbar({ traerDatosService }) {    
    const [campoBusqueda, setCampoBusqueda] = useState('')
    
    return(
    <section className="searchbar-container">
        <div className="searchbar">
            <input 
                type="text" 
                placeholder="Buscar..." 
                onChange={(event) => setCampoBusqueda(event.target.value)}
                value={campoBusqueda}
            />
            <button type="submit" onClick={traerDatosService}>
              <i id="id_lupa" className="fa fa-search sarasa"></i>
            </button>
        </div>
    </section>
    )
}

export default Searchbar