import { createStitches } from '@stitches/react'

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      primary: `#2B2A2C`,
      button: `#FFA939`,
      box: `#F1F1F1`,

      text: `#FFFFFF`
    },
    fontSizes: {
      16: `1rem`
    },
    fonts: {
      roboto: `'Roboto', 'sans-serif'`,
      secular: `'Secular One', 'sans-serif'`
    },
    space: {
      4: `0.25rem`,
      8: `0.50rem`,
      16: `1rem`,
      20: `1.25rem`
    },
    radii: {
      default: `0.50rem`,
      full: `99999px`
    }
  },

  media: {
    bp1: `(min-width: 480px)`
  },

  utils: {
    marginX: value => ({ marginLeft: value, marginRight: value })
  }
})
