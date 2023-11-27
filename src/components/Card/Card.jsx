import React from 'react'
import './Card.css'

export const Card = ({ children, item }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { item }),
  )

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
        {childrenWithProps}
      </div>
    </>
  )
}

export default Card
