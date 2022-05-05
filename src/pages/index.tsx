import { FormEvent, useState } from 'react'

import { useMatchMedia } from '../hooks/useMatchMedia'
import { errorCodes } from '../data/errorCodes'
import {
  Container,
  Header,
  Content,
  SearchForm,
  ResponseMessage,
  Info,
  Car,
  Footer
} from '../styles/pages/home.styles'

export default function Home() {
  const [message, setMessage] = useState(``)
  const [inputValue, setInputValue] = useState(``)
  const isTabletMedia = useMatchMedia({ type: `max`, width: 768 })

  function handleBlur(event: FormEvent) {
    console.log(`called`)
    if (inputValue.trim().length > 0 && isTabletMedia) {
      return handleSubmit(event)
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (inputValue.trim().length === 0) {
      setMessage(`Nenhum código informado.`)
      return
    }

    const findError = errorCodes.find(({ error }) => error.code === inputValue)

    setMessage(
      findError
        ? findError.error.message
        : `Oops! Nada foi encontrado para o código informado: ${inputValue}`
    )
  }

  return (
    <>
      <Container>
        <Header>
          <img src="/images/logo.svg" alt="chevrolet logo" />

          <h1>myCruze</h1>
        </Header>

        <Content>
          <p>
            <strong>Veja</strong> qual é o <strong>significado</strong> dos
            {` `}
            <strong>códigos</strong> de <strong>erro</strong> nos{` `}
            <strong>panéis</strong> dos <strong>Chevrolet.</strong>
          </p>

          <SearchForm onSubmit={handleSubmit}>
            <input
              required
              type="number"
              inputMode="numeric"
              onBlur={(event) => handleBlur(event)}
              // maxLength={3}
              // enterKeyHint="search"
              // pattern="[0-9]*"
              // title="Somente números."
              placeholder="Código do erro"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />

            {isTabletMedia ? (
              <button type="button" onClick={() => setInputValue(``)}>
                <img
                  src="/images/close.svg"
                  alt="button to clear input value"
                />
              </button>
            ) : (
              <button type="submit"> Pesquisar </button>
            )}
          </SearchForm>

          {message.length > 0 && (
            <ResponseMessage>
              <p>{message}</p>
            </ResponseMessage>
          )}

          <Info>
            <p>
              Confira a relação de códigos que podem aparecer no painel dos
              Chevrolet. Algumas mensagens podem não estar disponíveis para
              determinados modelos de veículos.
            </p>
          </Info>
        </Content>
        <Footer>
          <p>&copy; 2022 ONLY FOR STUDENT PURPOSE</p>
        </Footer>
      </Container>

      <Car>
        <span>Chevrolet</span>
        <img src="/images/car.png" alt="white sport car" />
      </Car>
    </>
  )
}
