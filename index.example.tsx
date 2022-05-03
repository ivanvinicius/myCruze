import Head from 'next/head'
// import { FormEvent, useState } from 'react'

// import { errorCodes } from '../data/errorCodes'
// import { Container } from '../styles/pages/home.styles'

export default function Home() {
  // const [message, setMessage] = useState(``)
  // const [inputValue, setInputValue] = useState(``)

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault()

  //   if (inputValue.trim().length === 0) {
  //     setMessage(`Nenhum código informado.`)
  //     return
  //   }

  //   const findError = errorCodes.find(({ error }) => error.code === inputValue)

  //   setMessage(
  //     findError ? findError.error.message : `Nenhuma mensagem encontrada.`
  //   )
  // }

  return (
    <>
      <Head>
        <title>myCruze</title>
      </Head>

      {/* <Container /> */}
    </>
  )
}
