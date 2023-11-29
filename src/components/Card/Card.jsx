import './Card.css'

export const Card = ({ children, item, deleteCard, icon }) => {
  const handleClick = (event) => {
    event.preventDefault()
    deleteCard(item.id)
  }

  return (
    <>
      <div className="card">
        <div className="parteSuperior">
          <div className="jugadorIcon">
            <i className={`fa-solid ${icon}`}></i>
          </div>
          <div className="nombre">{item.titulo}</div>
          <div className="botonesEdicion">
            <div>
              <i className="fa-solid fa-trash" onClick={handleClick}></i>
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
