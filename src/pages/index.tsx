import React from 'react';
import Head from 'next/head';

import Logo from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <head>
        <title>Tupã Wash | Home</title>
      </head>

      <Header>
        <image>
          <Logo />
        </image>
        <ul>Estética automotiva em Tupã</ul>
        <button>
          tel 14 9 9665 6138
        </button>
      </Header>

      <h1>Bem vindo a Tupã Wash</h1>
      <p>Seu carro novo de novo</p>
    </Container>
  )
}

export default Home