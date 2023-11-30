import { render} from '@testing-library/react'
import Component from './components/Home/Home.jsx'

/*
import { render, screen, waitFor } from '@testing-library/react'

describe('smoke test de la app', () => {
  test('la app levanta', async () => {
    render(<App/>)
    // Nota: el waitFor no es estrictamente necesario para que el test pase,
    // solamente es para que no aparezca un mensaje de advertencia de usar act() 
    // para más info: https://javascript.plainenglish.io/you-probably-dont-need-act-in-your-react-tests-2a0bcd2ad65c
    await waitFor(() => { expect(screen.getByTestId('app')).toBeInTheDocument() })
  })
})

*/

describe('Componente', () => {
  it('should validate the current page', () => {
    // Renderiza el componente
    const { getByText } = render(<Component />)

    // Obtiene el elemento HTML para el título de la página
    const titulo = getByText('Home')

    // Verifica que el título de la página sea correcto
    expect(titulo).toBeInTheDocument()
  })
})