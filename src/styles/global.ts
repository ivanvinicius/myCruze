import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`
  },

  body: {
    backgroundColor: `$gray50`,
    overflowX: `hidden`
  },

  'body, button, input, textarea': {
    fontFamily: `$roboto`,
    fontSize: `$16`,
    color: `$gray50`,

    '@mobileL': {
      fontSize: `$14`
    }
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: `$poppins`
  }
})
