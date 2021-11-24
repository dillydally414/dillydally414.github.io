import React, { ReactElement } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1rem;
`;

const App = (): ReactElement => {
  return (
    <HomeContainer>
      <h1>Dillon Scott</h1>
      <p>
        Traffic Light Incremental (Full Version): TBA
        <br />
        Traffic Light Incremental (Jam Version):
        <a href="https://dillydally414.itch.io/traffic-light-incremental">here</a>
        <br />
        ?????? ???????????:
        <a href="https://dillydally414.github.io/secret-incremental/">????</a>
        <br />
        Time deLayers:
        <a href="https://dillydally414.github.io/Time-deLayers/">here</a>
        <br />
        Discord:
        <a href="discord.gg/vdYDc76RKH">here</a>
        <br />
      </p>
    </HomeContainer>
  );
}

export default App;