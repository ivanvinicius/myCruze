import Head from 'next/head'
import { FormEvent, useState } from 'react'

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

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (inputValue.trim().length === 0) {
      setMessage(`Nenhum código informado.`)
      return
    }

    const findError = errorCodes.find(({ error }) => error.code === inputValue)

    setMessage(
      findError ? findError.error.message : `Nenhuma mensagem encontrada.`
    )
  }

  return (
    <>
      <Head>
        <title>myCruze</title>
      </Head>

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
              type="number"
              placeholder="Código do erro"
              inputMode="numeric"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />

            <button type="submit">Pesquisar</button>
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

          <div>
            <img src="/images/logo.svg" alt="Chevrolet logo" />
            <strong>myCruze</strong>
          </div>
        </Footer>
      </Container>

      <Car>
        <span>Chevrolet</span>
        <img src="/images/car.png" alt="white sport car" />
      </Car>
    </>
  )
}
