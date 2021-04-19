import { QuizContent } from '../../components/QuizContent'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import { MouseEvent } from 'react'

export default function CollectName(): JSX.Element {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log('hi')
    console.log(event.currentTarget.nodeValue)
  }

  return (
    <QuizContent>
      <h2>Causes</h2>
      <Chip
        icon={<FaceIcon />}
        label={'Children'}
        clickable
        color={'default'}
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label={'Environment'}
        clickable
        color={'default'}
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label={'Animal Welfare'}
        clickable
        color={'default'}
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label={'Civil Rights'}
        clickable
        color={'default'}
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label={'Housing'}
        clickable
        color={'default'}
        onClick={handleClick}
      />
    </QuizContent>
  )
}
