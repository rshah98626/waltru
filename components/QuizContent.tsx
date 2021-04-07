import React, { FunctionComponent } from 'react'
import { Layout } from './Layout'
import { MainContent } from './MainContent'

export const QuizContent: FunctionComponent<React.ReactNode> = ({ children }) => {
  return (
    <Layout>
      <MainContent>{children}</MainContent>
    </Layout>
  )
}
