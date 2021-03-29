import { AppProps } from 'next/app'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  //return <h1>Hi</h1>
  return <Component {...pageProps} />
}

export default App
