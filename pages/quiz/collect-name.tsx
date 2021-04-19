import Link from 'next/link'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { styled } from '@material-ui/core/styles'
import { QuizContent } from '../../components/QuizContent'

const StyledTextField = styled(TextField)({
  margin: '0.5rem',
})

const StyledButton = styled(Button)({
  margin: '0.5rem',
})

export default function CollectName(): JSX.Element {
  return (
    <QuizContent>
      <h2>What&apos;s your name?</h2>
      <span>
        <StyledTextField id="firstName" label="First Name" variant="outlined" />
        <StyledTextField id="lastName" label="Last Name" variant="outlined" />
      </span>
      <Link href="/quiz/causes">
        <StyledButton variant="contained" color="primary">
          Choose Causes
        </StyledButton>
      </Link>
    </QuizContent>
  )
}
