import { render, screen } from "@testing-library/react"
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


    it('test de renderizado de login', async () => {
               
        render(<Login/>)        
        
        const loginElement = screen.getByText(/WorldCApp:/i)

        expect(loginElement).toBeInTheDocument()

    })
})