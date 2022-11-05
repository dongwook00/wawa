import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <nav>
      <Link href={'/about'}>
        <a>Go to an about page</a>
      </Link>
    </nav>
  )
}

export default Home
