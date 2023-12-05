//import React from "react"
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/input.css'
import '../../../Maquetado/CSS/form.css'
import './PuntoDeVentaForm.css'
/* import { useOnInit } from '../../customHooks/hooks' */
import { useNavigate } from 'react-router-dom'
import { mostrarMensajeError } from '../../util/error-handling'
import { useLocation,useParams } from 'react-router-dom'
import { PuntoDeVenta } from '../../dominio/puntoDeVenta'
import { puntoDeVentaService } from '../../services/puntoDeVenta.service'
import { Snackbar, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import { Toggle } from '../ToggleButton/ToggleButton'



function PuntoDeVentaForm({ setTitulo }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()
  const [unPuntoDeVenta, setunPuntoDeVenta] = useState("")
  const [puntoDeVenta, setPuntoDeVenta] = useState(new PuntoDeVenta())
  const [errorMessage, setErrorMessage] = useState('')
  const [visualizar, setVisualizar] = useState(false)
  const snackbarOpen = !!errorMessage
  const editar = location.pathname.includes('editar')
  

  const actualizar = (referencia, valor) => {
    puntoDeVenta[referencia] = valor
    setPuntoDeVenta({ ...puntoDeVenta })
  }
  const logState = (state) => {
    console.log('Toggled:', state)
  }


  const traerUnPuntoDeVenta = async () => {
    try {
      const unPuntoDeVenta = await puntoDeVentaService.getById(id)
      setunPuntoDeVenta(unPuntoDeVenta)
      
    } catch (error) {
      console.log(unPuntoDeVenta)
      mostrarMensajeError(error, setErrorMessage)
    }
  }
  const traerPuntosDeVenta = async () => {
    try {
      const puntosDeVenta = await puntoDeVentaService.allInstances()
      
      setPuntoDeVenta(puntosDeVenta)
    } catch (error) {
      console.log("error:" + puntosDeVenta)
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
            <span>{unPuntoDeVenta.nombre}</span>
           </div><div className="visualizacion-item">
              <label htmlFor="direccion">direccion:</label>
              <span>{unPuntoDeVenta.direccion}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="coordenada_X">coordenada X</label>
              <span>{unPuntoDeVenta.ubicacionGeograficaX}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="altura">coordenada_y:</label>
              <span>{unPuntoDeVenta.ubicacionGeograficaY}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="sobres_dispobiles">sobres_dispobiles:</label>
              <span>{unPuntoDeVenta.stockDeSobres}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="pedidos_pendientes">pedidos_pendientes:</label>
              <span>{unPuntoDeVenta.pedidosPendientes}</span>
            </div><div className="visualizacion-item">
              <label htmlFor="seleccion">Tipo de negocio:</label> 
              <span>{unPuntoDeVenta.tipo}</span>
               {/* <span>
                  {unPuntoDeVenta.find((it) => it.id == unPuntoDeVenta.tipo_negocio.id)}
                </span>  */}
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
              value={unPuntoDeVenta.nombre}
              type="text"
              name="nombre"
              required />

            <label htmlFor="direccion">Dirección:</label>
            <input
              onChange={(event) => {
                actualizar('direccion', event.target.value)
              }}
              value={unPuntoDeVenta.direccion}
              type="text"
              name="direccion"
              required />

            <label htmlFor="coordenada_x">Coordenada X:</label>
            <input
              onChange={(event) => {
                actualizar('coordenada_x', event.target.value)
              }}
              value={unPuntoDeVenta.ubicacionGeograficaX}
              type="number"
              name="coordenada_x"
              step="any"
              required />

            <label htmlFor="coordenada_y">Coordenada Y:</label>
            <input
              onChange={(event) => {
                actualizar('coordenada_y', event.target.value)
              }}
              value={unPuntoDeVenta.ubicacionGeograficaY}
              type="number"
              name="coordenada_y"
              step="any"
              required />

            <label htmlFor="sobres_disponibles">Sobres Disponibles:</label>
            <input
              onChange={(event) => {
                actualizar('sobres_disponibles', event.target.value)
              }}
              value={unPuntoDeVenta.stockDeSobres}
              type="number"
              name="sobres_disponibles"
              required
              min="0" />

            <label htmlFor="pedidos_pendientes">Pedidos Pendientes:</label>
            <input
              onChange={(event) => {
                actualizar('pedidos_pendientes', event.target.value)
              }}
              value={unPuntoDeVenta.pedidosPendientes}
              type="number"
              name="pedidos_pendientes"
              required
              min="0" />

            <label htmlFor="tipo_negocio">Tipo de Negocio:</label>
            <select
              name="tipo_negocio"
              className="select"
              value={unPuntoDeVenta.tipo}
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
