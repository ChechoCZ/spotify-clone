import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="search"/>
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/1658913?v=4" alt="Avatar"/>
      Sergio Cuadros
    </User>
  </Container>
);

export default Header;