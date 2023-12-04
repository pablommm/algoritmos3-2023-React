import './Card.css'
import { useNavigate } from 'react-router-dom'

export const Card = ({ children, item, deleteCard, icon, ruta }) => {
  const navigate = useNavigate()

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
              <i
                className="fa-solid fa-pencil"
                onClick={() => navigate(`/plantilla/${ruta}/editar/${item.id}`)}
              ></i>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default Card
