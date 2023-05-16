import { ThemeProvider } from '@mui/material'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import tema from '../src/themes/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
