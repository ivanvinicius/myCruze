import { createStitches } from '@stitches/react'

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    fonts: {
      roboto: `'Roboto', 'sans-serif'`,
      poppins: `'Poppins', 'sans-serif'`
    },
    fontSizes: {
      14: `0.87rem`,
      16: `1rem`,
      22: `1.37rem`,
      26: `1.62rem`,
      96: `6rem`
    },
    colors: {
      gray50: `#EDF3F6`,
      gray100: `#B4B8BD`,
      gray200: `#C4C4C4`,
      gray150: `#747474`,
      gray400: `#444D5B`,
      gray500: `#323A46`,
      gray900: `#131313`,

      button: `#242424`
    },
    radii: {
      default: `0.50rem`,
      full: `99999px`
    },
    space: {
      4: `0.25rem`,
      8: `0.50rem`,
      16: `1rem`,
      20: `1.25rem`,
      32: `2rem`,
      48: `3rem`,
      64: `4rem`,
      82: `5.12rem`,
      120: `7.5rem`
    }
  },

  media: {
    bp1: `(min-width: 480px)`
  },

  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value })
  }
})
