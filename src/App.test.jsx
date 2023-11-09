import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

import { MailReader } from './components/MailReader'
import { MailsGrid } from './components/MailsGrid'
import { MailsSummary } from './components/MailsSummary'
import { mailService } from './service/mailService'

describe('smoke test de la app', () => {
  test('la app levanta', async () => {
    render(<App/>)
    // Nota: el waitFor no es estrictamente necesario para que el test pase,
    // solamente es para que no aparezca un mensaje de advertencia de usar act() 
    // para más info: https://javascript.plainenglish.io/you-probably-dont-need-act-in-your-react-tests-2a0bcd2ad65c
    await waitFor(() => { expect(screen.getByTestId('app')).toBeInTheDocument() })
  })
})