import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { phrases } from './phrases';

function App() {

  const [phrase, setPhrase] = useState(phrases[Math.floor(Math.random()*phrases.length)]);

  return (
    <Container>
      <Phrase>
        {phrase}
      </Phrase>
      <NextButton onClick={() => 
        setPhrase(phrases[Math.floor(Math.random()*phrases.length)])
      }>
        Next
      </NextButton>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Phrase = styled.div`
  font-size: 20px;
  text-align: center;
  color: #000;
  margin-bottom: 100px;
`;

const NextButton = styled.button`
  cursor: pointer;
  background-color: steelblue;
  color: #FFF;
  border-radius: 5px;
  height: 40px;
  line-height: 40px;
  width: 120px;
  font-size: 20px;
`;
