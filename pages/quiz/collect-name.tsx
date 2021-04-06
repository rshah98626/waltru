import Link from 'next/link'

export default function CollectName() {
  return (
    <>
      <h2>What's your name</h2>
      <h3>Rahul</h3>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-md-6'}>
            Hi
          </div>
        </div>
      </div>
      <Link href="/quiz/causes">
        <button>Click me</button>
      </Link>
    </>
  )
}