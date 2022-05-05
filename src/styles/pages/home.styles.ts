import { keyframes } from '@stitches/react'

import { styled } from '../theme'
import { pixelToRem } from '../../utils/pixelToRem'

const slideFromRightSide = keyframes({
  '0%': {
    opacity: `50%`,
    transform: `translateX(100%)`
  },
  '100%': {
    opacity: `100%`,
    transform: `translateX(0%)`
  }
})

const slideFromTop = keyframes({
  '0%': {
    opacity: `0%`,
    transform: `translateY(100%)`
  },
  '100%': {
    opacity: `70%`,
    transform: `translateY(0%)`
  }
})

export const Container = styled(`div`, {
  display: `flex`,
  flexDirection: `column`,

  padding: `$32 $32 0`,

  width: `100vw`,
  maxWidth: pixelToRem(1336),
  minHeight: `100vh`,

  background: `linear-gradient($gray500, $gray400)`,
  clipPath: `polygon(0 0, 100% 0, 86% 100%, 0 100%)`,

  '@mobileL': {
    padding: `$16 $16 0`,

    clipPath: `none`
  }
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
  },

  '@mobileL': {
    alignSelf: `center`
  }
})

export const Content = styled(`main`, {
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
  },

  '@mobileL': {
    marginTop: `$48`,

    '>p': {
      fontSize: `$22`
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
    background: `$gray400 url(images/search.svg) no-repeat scroll 16px 10px`,

    outline: `unset`,

    '&:focus': {
      border: `1px solid $gray50`,
      borderRight: `0`
    },

    '&::placeholder': {
      color: `$gray100`
    },

    MozAppearance: `textfield`,

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      WebkitAppearance: `none`,
      margin: 0
    },

    '@tablet': {
      padding: `0 $8 0 $40`,
      maxWidth: pixelToRem(350),

      background: `$gray400 url(images/search-mobile.svg) no-repeat scroll 16px 12px`
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
    },

    '@tablet': {
      backgroundColor: `$gray400`,

      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,

      '&:hover': {
        backgroundColor: `$gray400`
      }
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
  },

  '@mobileL': {
    padding: `$16`
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

  padding: `$16 0`,
  marginTop: `$48`,

  width: `100%`,
  maxWidth: pixelToRem(550),

  display: `flex`,
  flexDirection: `row`,

  '@mobileL': {
    padding: `$8 0`
  }
})

export const Car = styled(`aside`, {
  position: `absolute`,
  top: `30vh`,
  right: `$32`,

  width: `100%`,
  maxWidth: pixelToRem(718),

  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,

  img: {
    zIndex: 2,

    animation: `${slideFromRightSide} 1.5s ease-in-out`
  },

  span: {
    zIndex: 1,

    position: `absolute`,
    top: `-$48`,
    right: `$64`,

    fontFamily: `$poppins`,
    fontSize: `$96`,
    textTransform: `uppercase`,
    color: `transparent`,

    background: `linear-gradient(90deg, $gray900, $orange200)`,
    backgroundClip: `text`,
    WebkitBackgroundClip: `text`,
    opacity: `70%`,

    animation: `${slideFromTop} 0.6s ease-in-out`
  },

  '@laptop': {
    display: `none`
  }
})
