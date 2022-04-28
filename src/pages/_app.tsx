import { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
