import React from 'react';
import { Text } from 'react-native';
import styled from '@emotion/primitives';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border: 5px solid red;
`;

export default function App() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Container>
  );
}
