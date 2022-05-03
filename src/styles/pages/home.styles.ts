import { styled } from '../theme'
import { pixelToRem } from '../../utils/pixelToRem'

export const Container = styled(`div`, {
  position: `relative`,

  display: `flex`,
  flexDirection: `column`,

  margin: `0 auto`,
  padding: `$32 $16 0`,

  width: `100vw`,
  maxWidth: pixelToRem(1302),
  height: `100vh`
})

export const Header = styled(`header`, {
  display: `flex`,
  alignItems: `center`,

  gap: `$8`,

  img: {
    width: `50px`,
    height: `16px`
  },

  h1: {
    fontSize: `$22`
  }
})

export const Content = styled(`main`, {
  /**
   * https://dev.to/domysee/keeping-the-footer-at-the-bottom-with-css-flexbox-5h5f
   * (Remember to use 100vh of page)
   * Element grow the available space
   */
  flexGrow: 1,

  marginTop: `$120`,
  width: `100%`,
  maxWidth: pixelToRem(550),

  display: `flex`,
  flexDirection: `column`,

  '>p': {
    fontSize: `$26`,
    fontFamily: `$poppins`,
    textAlign: `center`,

    strong: {
      color: `$gray900`
    }
  }
})

export const SearchForm = styled(`form`, {
  marginTop: `$48`,

  display: `flex`,
  alignItems: `center`,

  input: {
    width: `100%`,
    maxWidth: pixelToRem(350),
    height: pixelToRem(41),
    padding: `0 $8 0 $48`,

    border: `1px solid $gray150`,
    borderRight: `0`,
    borderRadius: `$default 0 0 $default`,

    backgroundColor: `$gray400`,
    background: `$gray400 url(images/search.svg) no-repeat scroll 15px 10px`,

    outline: `unset`,

    '&:focus': {
      border: `1px solid $gray50`,
      borderRight: `0`
    },

    '&::placeholder': {
      color: `$gray100`
    }
  },

  button: {
    maxWidth: pixelToRem(100),
    height: pixelToRem(41),
    padding: `$8 $16`,

    cursor: `pointer`,
    border: `1px solid $gray150`,
    borderLeft: `0`,
    borderRadius: `0 $default $default 0`,

    fontSize: `$14`,
    fontFamily: `$poppins`,
    fontWeight: `600`,

    backgroundColor: `$button`,

    transition: `all 0.2s`,

    '&:hover': {
      backgroundColor: `$gray900`,
      border: `1px solid $gray50`,
      borderLeft: `0`
    }
  }
})

export const ResponseMessage = styled(`section`, {
  marginTop: `$48`,
  padding: `$32`,
  width: `100%`,
  maxWidth: pixelToRem(450),

  border: `1px solid $gray150`,
  borderRadius: `$default`,

  backgroundColor: `$gray400`,

  p: {
    textAlign: `justify`
  }
})

export const Info = styled(`section`, {
  marginTop: `$48`,
  width: `100%`,
  maxWidth: pixelToRem(450),

  p: {
    color: `$gray100`,
    textAlign: `justify`,
    fontSize: `$14`
  }
})

export const Footer = styled(`footer`, {
  flexShrink: 0,

  marginTop: `$82`,
  padding: `$16 0`,

  width: `100%`,
  maxWidth: pixelToRem(1302),

  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `space-between`,

  div: {
    display: `flex`,
    alignItems: `center`,

    gap: `$8`,

    strong: {
      fontFamily: `$poppins`,
      fontSize: `$16`
    }
  }
})

export const Cruze = styled(`div`, {
  position: `absolute`,
  right: `0`,

  width: `100%`,
  maxWidth: pixelToRem(718),

  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,

  img: {},

  span: {
    textTransform: `uppercase`,

    fontFamily: `$poppins`,
    fontSize: `$96`,
    color: `$gray900`,
    opacity: `15%`
  }
})
