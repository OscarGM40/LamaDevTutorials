import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials';
import { data, users } from '../data';
import styles from '../styles/Home.module.css'

export default function Home({ services, users }) {
  // console.log(services);

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio with Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/LogoMakr01.png" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials users={users} />
    </div>
  )
}

/* getStaticProps permite realizar un fetch(o cualquier otra cosa) antes de que se muestre el componente y mandarlo por props.Mejora la eficiencia y el SEO */
export const getStaticProps = async () => {
  const res = data;
  const usersData = users;
  return {
    props: {
      services: res,
      users: usersData
    },
  }
}