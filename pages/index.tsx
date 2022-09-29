import type { NextPage } from 'next'
import NavBar from '../components/NavBar'
import Main from '../components/HomePage/Main'
import Footer from '../components/Footer'
import MySkills from '../components/HomePage/MySkills'

const Home: NextPage = () => {
  return (
    <div className={``}>
      <NavBar />
      <Main />
      <MySkills />
      <Footer />
    </div>
  )
}

export default Home
