import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { VercelTemplateFooter } from '../components/VercelTemplateFooter'
import { Layout } from '../components/Layout'
import { MainContent } from '../components/MainContent'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <MainContent>
        <h1 className={styles.title}>Altru</h1>
        <h1 className={styles.title}>
          Take{' '}
          <Link href="/quiz/collect-name">
            <a>our quiz!</a>
          </Link>
        </h1>
      </MainContent>
      <VercelTemplateFooter />
    </Layout>
  )
}
