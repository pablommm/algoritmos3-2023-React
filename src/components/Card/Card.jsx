import CardJugador from '../CardJugador/CardJugador'
import './Card.css'

export const Card = ({ children, item }) => {
  /* const Componente = data.component */
  return (
    <>
      <div className="card">
        <div className="parteSuperior">
          <div className="jugadorIcon">
            <i className="fa-solid fa-person-running"></i>
          </div>
          {item.nombre}
          {/* <div className="nombre">{prueba}</div> */}
          <div className="botonesEdicion">
            <div>
              <i className="fa-solid fa-trash"></i>
            </div>
            <div>
              <i className="fa-solid fa-pencil"></i>
            </div>
          </div>
        </div>
        {/* Aca tiene que ir el componente que se recibe por props, ya que este es variable */}
        {children}
        {/* <Componente></Componente> */}
      </div>
    </>
  )
}

export default Card
