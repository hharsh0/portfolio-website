import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className='w-3/4 mx-auto'>
      <NavBar />
      <Footer />
    </div>
  )
}

export default Home
