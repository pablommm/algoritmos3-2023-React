//import React from "react"

import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'
import './PuntoDeVentaForm.css'
/* import { useOnInit } from '../../customHooks/hooks' */
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { PuntoDeVenta } from '../../dominio/puntoDeVenta'
import { useParams } from 'react-router-dom'
import { puntoDeVentaService } from '../../services/puntoDeVenta.service'
import { Snackbar, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import { Toggle } from '../ToggleButton/ToggleButton'

function PuntoDeVentaForm({ setTitulo }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const editar = location.pathname.includes('editar')
  const [visualizar, setVisualizar] = useState(false)
  const [puntoDeVenta, setPuntoDeVenta] = useState(new PuntoDeVenta())
  const [errorMessage, setErrorMessage] = useState('')
  const snackbarOpen = !!errorMessage

  const traerPuntoDeVenta = async () => {
    try {
      const puntoDeVenta = await puntoDeVentaService.getById(id)
      setPuntoDeVenta(puntoDeVenta)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const actualizar = (referencia, valor) => {
    puntoDeVenta.ubicacionGeografica[referencia] = valor
    puntoDeVenta[referencia] = valor

    setPuntoDeVenta({ ...puntoDeVenta })
  }

  const create = async () => {
    try {
      await puntoDeVentaService.create(puntoDeVenta)
      history.back()
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const guardar = async () => {
    try {
      await puntoDeVentaService.update(puntoDeVenta)
      navigate(`/plantilla/puntoVenta-form`)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }

  const logState = (state) => {
    console.log('Toggled:', state)
  }
  useEffect(() => {
    if (editar) {
      setTitulo('Editar Punto De Venta')
      traerPuntoDeVenta()
    } else {
      setTitulo('Nuevo Punto De Venta')
    }
  }, [location.pathname])

  return (
    <div className="sub-main-container form-container">
      {visualizar ? (
        <div className="visualizacion">
          <>
            <div className="visualizacion-item">
              <label htmlFor="nombre">Nombre:</label>
              <span>{puntoDeVenta.nombre}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="direccion">Dirección:</label>
              <span>{puntoDeVenta.direccion}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="ubicacionGeograficaX">Coordenada X</label>
              <span>{puntoDeVenta.ubicacionGeograficaX}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="ubicacionGeograficaY">Coordenada Y:</label>
              <span>{puntoDeVenta.ubicacionGeograficaY}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="stockDeSbores">Sobres dispobiles:</label>
              <span>{puntoDeVenta.stockDeSobres}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="pedidosPendientes">Pedidos pendientes:</label>
              <span>{puntoDeVenta.pedidosPendientes}</span>
            </div>
            <div className="visualizacion-item">
              <label htmlFor="seleccion">Tipo de negocio:</label>
              {/* <span>
                  {puntoDeVenta.find((it) => it.id == puntoDeVenta.tipo_negocio.id)}
                </span> */}
            </div>
            <button className="secondary-button" onClick={() => history.back()}>
              Volver
            </button>
          </>
        </div>
      ) : (
        <div className="formulario">
          <form>
            <label htmlFor="nombre">Nombre del Punto de Venta:</label>
            <input
              onChange={(event) => {
                actualizar('nombre', event.target.value)
              }}
              value={puntoDeVenta.nombre}
              type="text"
              name="nombre"
              required
            />

            <label htmlFor="direccion">Dirección:</label>
            <input
              onChange={(event) => {
                actualizar('direccion', event.target.value)
              }}
              value={puntoDeVenta.direccion}
              type="text"
              name="direccion"
              required
            />

            <label htmlFor="coordenada_x">Coordenada X:</label>
            <input
              onChange={(event) => {
                actualizar('x', event.target.value)
              }}
              value={puntoDeVenta.ubicacionGeografica.x}
              type="number"
              name="coordenada_x"
              step="any"
              required
            />

            <label htmlFor="coordenada_y">Coordenada Y:</label>
            <input
              onChange={(event) => {
                actualizar('y', event.target.value)
              }}
              value={puntoDeVenta.ubicacionGeografica.y}
              type="number"
              name="coordenada_y"
              step="any"
              required
            />

            <label htmlFor="stockDeSobres">Sobres Disponibles:</label>
            <input
              onChange={(event) => {
                actualizar('stockDeSobres', event.target.value)
              }}
              value={puntoDeVenta.stockDeSobres}
              type="number"
              name="stockDeSobres"
              required
              min="0"
            />

            <label htmlFor="cantidadPedidosPendientes">
              Pedidos Pendientes:
            </label>
            <input
              onChange={(event) => {
                actualizar('cantidadPedidosPendientes', event.target.value)
              }}
              value={puntoDeVenta.cantidadPedidosPendientes}
              type="number"
              name="cantidadPedidosPendientes"
              required
              min="0"
            />

            <label htmlFor="tipo">Tipo de Negocio:</label>
            <select
              name="tipo"
              className="select"
              value={puntoDeVenta.tipo}
              onChange={(event) => {
                actualizar('tipo', event.target.value)
              }}
            >
              <option value="Kiosco">Kiosco</option>
              <option value="Supermercado">Supermercado</option>
              <option value="Libreria">Librería</option>
            </select>
            <div className="buttonConteiner">
              <button
                className="secondary-button"
                onClick={() => history.back()}
              >
                Volver
              </button>
              <button
                className="primary-button"
                onClick={editar ? guardar : create}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}
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
    </div>
  )
}

export default PuntoDeVentaForm
