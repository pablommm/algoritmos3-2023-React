import { render, screen } from '@testing-library/react'
import Card from './Card'
import { MemoryRouter } from 'react-router'
import { dataJugador } from '../../App'
import { Jugador } from '../../dominio/jugador'

describe('Card', () => {
  const jugador = {
    nombre: 'Cristiano',
    apellido: 'Ronaldo',
    fechaDeNacimiento: '1999-11-04',
    nroDeCamiseta: 10,
    anioDebut: '2003',
    altura: 100,
    peso: 100,
    lider: true,
    posicion: 'Delantero',
    pais: '',
    cotizacion: 1000000,
    id: 1,
    idSeleccion: 0,
    seleccion: {
      id: 1,
      pais: 'Portugal',
    },
  }

  const item = Jugador.fromJson(jugador)

  const deleteCard = () => {
    console.log('mock')
  }

  it('renderiza el título correctamente', () => {
    render(
      <MemoryRouter>
        <Card
          key={item.id}
          item={item}
          icon={dataJugador.icon}
          ruta={dataJugador.navegacion}
          deleteCard={deleteCard}
        >
          {dataJugador.component(item)}
        </Card>
      </MemoryRouter>,
    )
    const titulo = screen.getByTestId('card-titulo')
    expect(titulo.textContent).toBe('Cristiano Ronaldo')
  })
})
