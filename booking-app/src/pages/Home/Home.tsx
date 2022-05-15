import { FC } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className='home'>
    <Navbar />
    <Header />
  </div>
)

export default Home
