import React from 'react';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

import { createGlobalStyle } from 'styled-components';
import { Wrapper, Container } from './styles/components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color: #FFF;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
        </Container>
        <Player />
      </Wrapper>
  </React.Fragment>
);

export default App;
