import { FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

export const MainContent: FunctionComponent<React.ReactNode> = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}