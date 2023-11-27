import './Card.css'

export const Card = ({ children, item }) => {
  return (
    <>
      <div className="card">
        <div className="parteSuperior">
          <div className="jugadorIcon">
            <i className="fa-solid fa-person-running"></i>
          </div>
          <div className="nombre">{item.nombre}</div>
          <div className="botonesEdicion">
            <div>
              <i className="fa-solid fa-trash"></i>
            </div>
            <div>
              <i className="fa-solid fa-pencil"></i>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default Card
