import { render, act,screen } from "@testing-library/react"

import { expect } from 'vitest'
//import { useNavigate } from 'react-router-dom'
import PuntoDeVentaForm from "./PuntoDeVentaForm"
import { MemoryRouter } from "react-router-dom"
/* describe('PuntoDeVentaForm', () => {
        
    test('clicking "Volver" button redirects to "/plantilla/puntosDeVenta"', () => {
        const setTitulo = () => {
           
          }
        render(
          <MemoryRouter>
            <PuntoDeVentaForm setTitulo={setTitulo} />
          </MemoryRouter>
        )
    
        const volverButton = screen.getByrole('button',{secondary_button})
        
        act(() => { volverButton.click()})  
    
        expect(window.location.pathname).toBe('/plantilla/puntosDeVenta')
      })
    
}) */