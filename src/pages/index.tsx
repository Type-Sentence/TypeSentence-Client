import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ContainerTypeZone from '../components/typezone'
import LogoContainer from '../components/typezone/header/logoContainer'
import styles from '../utils/styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <ContainerTypeZone />
      <LogoContainer />
    </>
  )
}

export default Home
