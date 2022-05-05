import Head from 'next/head'
import { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>myCruze</title>
      </Head>

      {globalStyles()}

      <Component {...pageProps} />
    </>
  )
}
