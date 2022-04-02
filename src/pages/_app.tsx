import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/shared/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
