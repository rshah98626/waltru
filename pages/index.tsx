import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { VercelTemplateFooter } from '../components/VercelTemplateFooter'
import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Altru
        </h1>
        <h1 className={styles.title}>
          Take{' '}
          <Link href="/quiz/collect-name">
            <a>our quiz!</a>
          </Link>
        </h1>
      </main>

      <VercelTemplateFooter />
    </Layout>
  )
}
