import React, { ReactElement } from "react";
import Game from "../components/Game";
import { ProjectType } from "../types";
import games from '../assets/games';

const Games = (): ReactElement => {
  return (
    <>
      {games.map((game: ProjectType) => {
        return <Game info={game} key={game.name} />;
      })}
    </>
  );
};

export default Games;