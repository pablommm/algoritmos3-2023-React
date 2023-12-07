import { render, screen,act,waitFor } from "@testing-library/react"
import { Login } from "./Login"
import { expect } from 'vitest'
import { MemoryRouter } from "react-router-dom"
describe('Login', () => {
        
    it('test de renderizado de login', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )
        const loginElement = screen.getByText(/WorldCApp/i)

        expect(loginElement).toBeInTheDocument()
    })

    it('test de renderizado de placeholder', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )
        const placeHolder1 = screen.getByPlaceholderText('Usuario')
        
        expect(placeHolder1).toBeInTheDocument()
       
    })

    it('debería mostrar el mensaje de error al no ingresar ningun usuario e intentar loguear', async () => {
        // este test solo funciona si el backend esta levantado
        render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>)
    
        const loginButton = screen.getByRole('button', { name: 'Ingresar' })
        act(() => { loginButton.click()})    
    
        await waitFor(() => {
          expect(screen.getByRole('alert')).toBeInTheDocument()
        })

        expect(screen.getByText('Los datos ingresados son incorrectos')).toBeInTheDocument()
      })

})