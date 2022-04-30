import Head from 'next/head'
import { FormEvent, useState } from 'react'

import { errorCodes } from '../data/errorCodes'
import {
  Container,
  Header,
  Img,
  Title,
  Form,
  Input,
  Button,
  Response
} from '../styles/pages/home.styles'

export default function Home() {
  const [errorMessage, setErrorMessage] = useState(``)
  const [inputValue, setInputValue] = useState(``)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (inputValue.trim().length === 0) {
      alert(`Nenhum valor informado.`)
      return
    }

    const findError = errorCodes.find(({ error }) => error.code === inputValue)

    setErrorMessage(
      findError ? findError.error.message : `Nenhuma mensagem encontrada.`
    )
  }

  return (
    <>
      <Head>
        <title>myOnix</title>
      </Head>

      <Container>
        <Header>
          <Img src="/images/logo.svg" alt="chevrolet logo" />

          <Title>myOnix</Title>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Informe o código"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />

          <Button type="submit">Pesquisar</Button>
        </Form>

        {errorMessage.length > 0 && (
          <Response>
            <p>{errorMessage}</p>
          </Response>
        )}
      </Container>
    </>
  )
}
