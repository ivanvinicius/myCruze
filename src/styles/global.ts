import { globalCss } from './'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`
  },

  body: {
    backgroundColor: `$primary`,
    color: `$text`
  }

  // 'body, button, input, textarea,': {
  //   fontFamily: `$default`
  // },

  // body: {
  //   background: `$background`,
  //   color: `$text`
  // },

  // 'h1, h2, h3, h4, h5, h6': {
  //   color: `$title`
  // }
})
