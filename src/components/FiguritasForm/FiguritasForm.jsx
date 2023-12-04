import './FiguritasForm.css'
//import React from "react"

import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/form.css'
import '../../../Maquetado/CSS/input.css'
/* import { useOnInit } from '../../customHooks/hooks' */
import { useNavigate } from 'react-router-dom'
import { jugadorService } from '../../services/jugador.service'
import { figuritaService } from '../../services/figurita.service'
import { mostrarMensajeError } from '../../util/error-handling'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Snackbar, Alert } from '@mui/material'
import { Figurita } from '../../dominio/figurita'
import { Toggle } from '../ToggleButton/ToggleButton'

function FiguritasForm({ setTitulo }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const editar = location.pathname.includes('editar')
  const [visualizar, setVisualizar] = useState(false)
  const [jugadores, setJugadores] = useState([])
  const [figurita, setFigurita] = useState(new Figurita())
  const [errorMessage, setErrorMessage] = useState('')
  const snackbarOpen = !!errorMessage

  const traerFigurita = async () => {
    try {
      const figurita = await figuritaService.getById(id)
      /* console.log(figurita) */
      setFigurita(figurita)
    } catch {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const traerJugadores = async () => {
    try {
      const jugadores = await jugadorService.jugadoresCrearFigurita()
      setJugadores(jugadores)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const actualizar = (referencia, valor) => {
    figurita[referencia] = valor
    setFigurita({ ...figurita })
    /* console.log(figurita) */
  }

  const create = async () => {
    try {
      await figuritaService.create(figurita)
      history.back()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const guardar = async () => {
    try {
      await figuritaService.update(figurita)
      history.back()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const logState = (state) => {
    console.log('Toggled:', state)
  }

  const isOnFireLabel = () => {
    if (!figurita.onFire) {
      return 'line-through'
    }
  }

  useEffect(() => {
    traerJugadores()
    if (editar) {
      setTitulo('Editar Figurita')
      traerFigurita()
      /* console.log(figurita) */
    } else {
      setTitulo('Nueva Figurita')
    }
  }, [location.pathname])

  return (
    <>
      <main className="main-container">
        <section className="sub-main-container form-container">
          {visualizar ? (
            <div className="visualizacion">
              <div className="visualizacion-item">
                <label htmlFor="numero">Número:</label>
                <span>{figurita.numero}</span>
              </div>
              <div className="visualizacion-item">
                <label htmlFor="jugador">Jugador:</label>
                <span>{figurita.titulo}</span>
              </div>
              <div className="visualizacion-item">
                <span style={{ textDecoration: isOnFireLabel() }}>On Fire</span>
              </div>
              <div className="visualizacion-item">
                <label htmlFor="nivelDeImpresion">Nivel De Impresión:</label>
                <span>{figurita.nivelDeImpresion}</span>
              </div>
              <div className="visualizacion-item-imagen">
                <img
                  className="visualizacion-imagen"
                  src={figurita.imagen}
                  alt="Jugador"
                />
              </div>
              <button
                className="secondary-button"
                onClick={() => navigate(`/plantilla/figuritas`)}
              >
                Volver
              </button>
            </div>
          ) : (
            <div className="formulario">
              <form>
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
                <span>{figurita.numero}</span>

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
                  checked={figurita.onFire}
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
                <span>{figurita.imagen}</span>
                <div className="buttonConteiner">
                  <button
                    className="secondary-button"
                    onClick={() => navigate(`/plantilla/figuritas`)}
                  >
                    Volver
                  </button>
                  <button
                    onClick={editar ? guardar : create}
                    className="primary-button"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>
        {editar ? (
          <Toggle
            label="Toggle me"
            toggled={visualizar}
            onClick={logState}
            setVisualizar={setVisualizar}
          />
        ) : (
          <></>
        )}
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
