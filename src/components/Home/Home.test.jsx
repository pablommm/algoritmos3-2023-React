import { render, screen } from "@testing-library/react"
import { expect } from 'vitest'


import { MemoryRouter } from "react-router-dom"
import { Home } from './Home.jsx'


describe('Home', () => {

    it('test de renderizado de Home', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const loginElement = screen.getByText("Home")

        expect(loginElement).toBeInTheDocument()
    })
    it('test de renderizado de Home contenido', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const loginElement = screen.getByText("Figuritas Faltantes")

        expect(loginElement).toBeInTheDocument()
    })
    it('test de renderizado de Home Contenido', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const loginElement = screen.getByText("Usuarios Activos")

        expect(loginElement).toBeInTheDocument()
    })
})