import { render, screen } from "@testing-library/react"
import { Login } from "./Login"

describe('Login', () => {
    it('Cuando se loguea un usuario existente, se recibe el valor correspondiente', () => {
        //Arrange
        render(<Login/>)
        const botonLogin = screen.getByTestID('login')
        //Act
        botonLogin.click()
        //Assert
    })
})