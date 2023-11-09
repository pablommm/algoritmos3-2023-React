import "./Figuritas.css"
import React from "react"


import "../../Maquetado/CSS/button.css"
import  "../../Maquetado/CSS/general.css"
import "../../Maquetado/CSS/form.css"
import "../../Maquetado/CSS/input.css"


function template() {
  return (
    <>
      <head>
        <title>Formulario Figurita</title>
        <link rel="stylesheet" href="../CSS/button.css" />
        <link rel="stylesheet" href="../CSS/general.css" />
        <link rel="stylesheet" href="../CSS/form.css" />
        <link rel="stylesheet" href="../CSS/input.css" />
      </head>
      <main className="main-container">
        <section className="sub-main-container">
          <div className="formulario">
            <form action="/p" method="POST">
              <label htmlFor="numero_jugador">Número de Jugador:</label>
              <input
                type="number"
                name="numero_jugador"
                required
                min="0"
              />

              <label htmlFor="on_fire">Es On Fire:</label>
              <input type="checkbox" name="on_fire" />

              <label htmlFor="nivel_impresion">Nivel de Impresión:</label>
              <select className="select">
                <option value="bajo">Bajo</option>
                <option value="medio">Medio</option>
                <option value="alto">Alto</option>
              </select>

              <label htmlFor="url_imagen">URL de la Imagen:</label>
              <input
                type="url"
                name="url_imagen"
                required
              />

              <button className="secondary-button">Volver</button>
              <button className="primary-button">Guardar</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default template