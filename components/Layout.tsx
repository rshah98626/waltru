import Head from 'next/head'
import { FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

type Props = {
  children?: React.ReactNode
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Altru</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      {children}
    </div>
  )
}