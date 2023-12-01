import './FiguritasForm.css'
//import React from "react"

import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/form.css'
import '../../../Maquetado/CSS/input.css'
/* import { useOnInit } from '../../customHooks/hooks' */
import { jugadorService } from '../../services/jugador.service'
import { figuritaService } from '../../services/figurita.service'
import { mostrarMensajeError } from '../../util/error-handling'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Snackbar, Alert } from '@mui/material'
import { Figurita } from '../../dominio/figurita'

function FiguritasForm({ setTitulo }) {
  const location = useLocation()
  const [jugadores, setJugadores] = useState([])
  const [figurita, setFigurita] = useState(new Figurita())
  const [errorMessage, setErrorMessage] = useState('')
  const snackbarOpen = !!errorMessage

  const actualizar = (referencia, valor) => {
    figurita[referencia] = valor
    setFigurita({ ...figurita })
  }

  useEffect(() => {
    setTitulo('Nueva Figurita')
    traerJugadores()
  }, [location.pathname])

  const traerJugadores = async () => {
    try {
      const jugadores = await jugadorService.jugadoresCrearFigurita()
      setJugadores(jugadores)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const create = async () => {
    try {
      await figuritaService.create(figurita)
      history.back()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  return (
    <>
      <main className="main-container">
        <section className="sub-main-container form-container">
          <div className="formulario">
            <form /* action="/p" method="POST" */>
              <label htmlFor="numero">Número:</label>
              <input
                onChange={(event) => {
                  actualizar('numero', event.target.value)
                }}
                value={figurita.numero}
                type="number"
                name="numero"
                required
                min="0"
              />

              <label htmlFor="jugador">Jugador:</label>
              <select
                className="select"
                value={figurita.idJugador}
                onChange={(event) => {
                  actualizar('idJugador', event.target.value)
                }}
              >
                {jugadores.map((jugador) => (
                  <option key={jugador.id} value={jugador.id}>
                    {jugador.titulo}
                  </option>
                ))}
              </select>
              <span>{figurita.idJugador}</span>

              <label htmlFor="on_fire">Es On Fire:</label>
              <input
                onChange={(event) => {
                  actualizar('onFire', event.target.checked)
                }}
                value={figurita.onFire}
                type="checkbox"
                name="on_fire"
              />

              <label htmlFor="nivel_impresion">Nivel de Impresión:</label>
              <select
                className="select"
                value={figurita.nivelDeImpresion}
                onChange={(event) => {
                  actualizar('nivelDeImpresion', event.target.value)
                }}
              >
                <option value="BAJA">BAJA</option>
                <option value="MEDIA">MEDIA</option>
                <option value="ALTA">ALTA</option>
              </select>

              {/* <span>On Fire: {figurita.onFire ? 'true' : 'false'}</span> */}
              <label htmlFor="url_imagen">URL de la Imagen:</label>
              <input
                onChange={(event) => {
                  actualizar('imagen', event.target.value)
                }}
                value={figurita.imagen}
                type="url"
                name="url_imagen"
                required
              />
              {/* <span>{figurita.imagen}</span> */}
              <div className="buttonConteiner">
                <button
                  className="secondary-button"
                  onClick={() => history.back()}
                >
                  Volver
                </button>
                <button onClick={create} className="primary-button">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </section>
        <Snackbar
          open={snackbarOpen}
          variant="error"
          autoHideDuration={1800}
          onClose={() => setErrorMessage(false)}
          style={{ marginBottom: '8rem', fontSize: '400rem' }}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
      </main>
    </>
  )
}

export default FiguritasForm
