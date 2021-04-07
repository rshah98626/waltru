import Head from 'next/head'
import { FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

export const Layout: FunctionComponent<React.ReactNode> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Altru</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      {children}
    </div>
  )
}
