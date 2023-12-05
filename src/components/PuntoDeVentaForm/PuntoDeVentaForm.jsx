//import React from "react"

import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'
import './PuntoDeVentaForm.css'
/* import { useOnInit } from '../../customHooks/hooks' */
import { useLocation } from 'react-router-dom'
import { PuntoDeVenta } from '../../dominio/puntoDeVenta'
import { puntoDeVentaService } from '../../services/puntoDeVenta.service'
import { Snackbar, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import { Toggle } from '../ToggleButton/ToggleButton'



function PuntoDeVentaForm({ setTitulo }) {
 
  const location = useLocation()
  const [puntoDeVenta, setPuntoDeVenta] = useState(new PuntoDeVenta())
  const [errorMessage, setErrorMessage] = useState('')

  const snackbarOpen = !!errorMessage
  const editar = location.pathname.includes('editar')
  const [visualizar, setVisualizar] = useState(false)

  const actualizar = (referencia, valor) => {
    puntoDeVenta[referencia] = valor
    setPuntoDeVenta({ ...puntoDeVenta })
  }
  const logState = (state) => {
    console.log('Toggled:', state)
  }
  
  const { id } = location.state || { id: null }

  /*useEffect(() => {
    setTitulo('Nuevo Punto De Venta')
    traerPuntosDeVenta()
  }, [location.pathname])
*/

  const traerUnPuntoDeVenta = async () => {
    try {
      const puntoDeVenta = await puntoDeVentaService.getById(id)
      setPuntoDeVenta(puntoDeVenta)
      console.log(puntoDeVenta)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
  }



  const traerPuntosDeVenta = async () => {
    try {
      const puntosDeVenta = await puntoDeVentaService.allInstances()
      
      setPuntoDeVenta(puntosDeVenta)
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
    }
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
  useEffect(() => {
    traerPuntosDeVenta()
    if (editar) {
      setTitulo('Editar Punto De Venta')
      traerUnPuntoDeVenta()
    } else {
      setTitulo('Nuevo Punto De Venta')
    }
  }, [location.pathname])


  return (
    <div className="sub-main-container form-container">
      {visualizar ? (
        <div className="visualizacion">
          <><div className="visualizacion-item">
            <label htmlFor="nombre">Nombre Punto:</label>
            <span>{puntoDeVenta.nombre}</span>
          {/* </div><div className="visualizacion-item">
              <label htmlFor="direccion">direccion:</label>
              <span>{puntoDeVenta.direccion}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="coordenada_X">coordenada X</label>
              <span>{puntoDeVenta.coordenada_X}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="altura">coordenada_y:</label>
              <span>{puntoDeVenta.coordenada_y}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="sobres_dispobiles">sobres_dispobiles:</label>
              <span>{puntoDeVenta.sobres_dispobiles}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="pedidos_pendientes">Nro de Camiseta:</label>
              <span>{puntoDeVenta.pedidos_pendientes}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="seleccion">Tipo de negocio:</label> */}
              {/* <span>
                  {puntoDeVenta.find((it) => it.id == puntoDeVenta.tipo_negocio.id)}
                </span> */}
            </div><button
              className="secondary-button"
              onClick={()  => history.back()}
            >
              Volver
            </button></>
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
              required />

            <label htmlFor="direccion">Dirección:</label>
            <input
              onChange={(event) => {
                actualizar('direccion', event.target.value)
              }}
              value={puntoDeVenta.direccion}
              type="text"
              name="direccion"
              required />

            <label htmlFor="coordenada_x">Coordenada X:</label>
            <input
              onChange={(event) => {
                actualizar('coordenada_x', event.target.value)
              }}
              value={puntoDeVenta.coordenada_x}
              type="number"
              name="coordenada_x"
              step="any"
              required />

            <label htmlFor="coordenada_y">Coordenada Y:</label>
            <input
              onChange={(event) => {
                actualizar('coordenada_y', event.target.value)
              }}
              value={puntoDeVenta.coordenada_y}
              type="number"
              name="coordenada_y"
              step="any"
              required />

            <label htmlFor="sobres_disponibles">Sobres Disponibles:</label>
            <input
              onChange={(event) => {
                actualizar('sobres_disponibles', event.target.value)
              }}
              value={puntoDeVenta.sobres_disponibles}
              type="number"
              name="sobres_disponibles"
              required
              min="0" />

            <label htmlFor="pedidos_pendientes">Pedidos Pendientes:</label>
            <input
              onChange={(event) => {
                actualizar('pedidos_pendientes', event.target.value)
              }}
              value={puntoDeVenta.pedidos_pendientes}
              type="number"
              name="pedidos_pendientes"
              required
              min="0" />

            <label htmlFor="tipo_negocio">Tipo de Negocio:</label>
            <select
              name="tipo_negocio"
              className="select"
              value={puntoDeVenta.tipo}
              onChange={(event) => {
                actualizar('tipo_negocio', event.target.value)
              }}
            >
              {/*     {puntoDeVenta.map((ptoDeVta) =>(
                <option key={ptoDeVta.tipo} value={ptoDeVta.tipo}>
                  {ptoDeVta.tipo}
                </option>
              ))} */}
              {/* <option value="Kiosko">Kiosko</option>
            <option value="Supermercado">Supermercado</option> */}
            </select>
            <div className="buttonConteiner">
              <button className="secondary-button" onClick={() => history.back()}>
                Volver
              </button>
              <button className="primary-button" onClick={editar ? guardar : create}>Guardar</button>
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
