import { render, screen } from "@testing-library/react"
import { Login } from "./Login"
import { expect } from 'vitest'


import { MemoryRouter } from "react-router-dom"
describe('Login', () => {
        it('Cuando se loguea un usuario existente, se navega a home',  () => {
                 
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )
        const usernameInput = screen.getByPlaceholderText('Usuario')
        const passwordInput = screen.getByPlaceholderText('Contraseña')
        //const loginButton = screen.getByRole('button', { name: 'Ingresar' })

         userEvent.type(usernameInput, 'JMartinez')
         userEvent.type(passwordInput, '1234')
        
        const botonLogin = screen.getByTestID('login')
           
           act(() => { botonLogin.click()})           
           expect(navigateMock).toHaveBeenCalledWith('/plantilla/home')
       })  


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
})