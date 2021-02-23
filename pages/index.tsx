import Head from 'next/head'
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Typescript App</title>
      </Head>

      <main>
       <Title>Teste Omnilabs</Title>
      </main>
    </div>
  )
}
