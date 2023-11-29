import React from 'react'
import './Card.css'
/* import '/node_modules/flag-icons/css/flag-icons.min.css' */

export const Card = ({ children, item, deleteCard, icon }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { item }),
  )

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
            {/* <i className="flag-icon flag-icon-ad flag-icon-squared"></i> */}
          </div>
          <div className="nombre">{item.nombre}</div>
          <div className="botonesEdicion">
            <div>
              <i className="fa-solid fa-trash" onClick={handleClick}></i>
            </div>
            <div>
              <i className="fa-solid fa-pencil"></i>
            </div>
          </div>
        </div>
        {childrenWithProps}
      </div>
    </>
  )
}

export default Card
