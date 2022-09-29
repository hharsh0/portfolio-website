import type { NextPage } from 'next'
import NavBar from '../components/HomePage/NavBar'
import Main from '../components/HomePage/Main'
import Footer from '../components/HomePage/Footer'
import styles from '../styles/navBar.module.css'

const Home: NextPage = () => {
  return (
    <div className={`mx-auto`}>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
