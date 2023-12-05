import { render, screen, MemoryRouter } from "@testing-library/react"
import { Login } from "./Login"
import { expect } from 'vitest'

describe('Login', () => {
    /*    it('Cuando se loguea un usuario existente, se navega a home', async () => {
           //Arrange       
           render(<Login/>)
           const botonLogin = screen.getByTestID('login')
           //Act
           act(() => { botonLogin.click()})
           //Assert
           expect(navigateMock).toHaveBeenCalledWith('/plantilla/home')
       }) */


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
        expect(screen.getByRole('textbox', { name: 'Usuario' })).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Usuario')).toBeInTheDocument()
    })
})