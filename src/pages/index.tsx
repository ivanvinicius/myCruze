import Head from 'next/head'

import {
  Container,
  Header,
  Content,
  SearchForm,
  ResponseMessage,
  Info,
  // Cruze,
  Footer
} from '../styles/pages/home.styles'

export default function Home() {
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
            Veja qual é o <strong>significado</strong> dos{` `}
            <strong>códigos</strong> de <strong>erro</strong> nos{` `}
            <strong>panéis</strong> dos <strong>Chevrolet.</strong>
          </p>

          <SearchForm>
            <input
              type="text"
              placeholder="Código do erro"
              inputMode="numeric"
            />

            <button type="submit">Pesquisar</button>
          </SearchForm>

          <ResponseMessage>
            <p>
              A Chevrolet escutou você e preparou um financiamento com as
              melhores vantagens.
            </p>
          </ResponseMessage>

          <Info>
            <p>
              Confira a relação de códigos que podem aparecer no painel dos
              Chevrolet. Algumas mensagens podem não estar disponíveis para
              determinados modelos de veículos.
            </p>
          </Info>

          {/* <Cruze>
          <span>Chevrolet</span>
          <img src="/images/car.png" alt="white sport car" />
        </Cruze> */}
        </Content>

        <Footer>
          <p>&copy; 2022 ONLY FOR STUDENT PURPOSE - Ivan Vinicius Boneti</p>

          <div>
            <img src="/images/logo.svg" alt="Chevrolet logo" />
            <strong>myCruze</strong>
          </div>
        </Footer>
      </Container>
    </>
  )
}
