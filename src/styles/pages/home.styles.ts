import { styled } from '..'

export const Container = styled(`div`, {
  width: `100vw`,
  height: `100vh`,

  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,

  flexDirection: `column`
})

export const Header = styled(`div`, {
  display: `flex`,
  flexDirection: `row`
})

export const Img = styled(`img`, {
  width: `6.25rem`,
  height: `3.125rem`
})

export const Title = styled(`h1`, {
  marginLeft: `$20`
})

export const Form = styled(`form`, {
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  flexDirection: `column`,

  marginTop: `$16`
})

export const Input = styled(`input`, {
  width: `20rem`,
  padding: `$8  $16`,

  borderRadius: `$default`
})

export const Button = styled(`button`, {
  marginTop: `$16`,
  padding: `0.50rem 3rem`,

  border: `none`,
  borderRadius: `$full`,

  backgroundColor: `$button`,
  color: `$text`
})

export const Response = styled(`section`, {
  width: `20rem`,
  marginTop: `$16`,
  padding: `$16`,

  display: `flex`,
  alignItems: `center`,

  borderRadius: `$default`,

  backgroundColor: `$box`,

  color: `$primary`,
  textAlign: `justify`
})
