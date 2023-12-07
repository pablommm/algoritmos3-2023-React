import { MemoryRouter } from "react-router-dom"
import { expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { CardPtoDeVenta } from "./CardPtoDeVenta"




describe('CardPtoDeVenta', () => {
    it('test de renderizado de CardPtoDeVenta', () => {
        render(
            <MemoryRouter>
                <CardPtoDeVenta />
            </MemoryRouter>
        )
        const loginElement = screen.getByText("Puntos de Venta")
    
        expect(loginElement).toBeInTheDocument()
    })
    

})