import React from 'react';
import Head from 'next/head';

import Logo from '../assets/logo.svg'
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Tupã Wash | Home</title>
      </Head>

      <Logo />
      <h1>Bem vindo a Tupã Wash</h1>
      <p>Seu carro novo de novo</p>
    </Container>
  )
}

export default Home