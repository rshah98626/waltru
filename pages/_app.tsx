import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default App
