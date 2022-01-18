import React, { ReactElement } from "react";
import Game from "../components/Game";
import { ProjectType } from "../types";
import games from '../assets/games';

const Games = (): ReactElement => {
  return (
    <>
      {games.map((game: ProjectType, index: number) => {
        return <Game info={game} index={index} key={game.name} />;
      })}
    </>
  );
};

export default Games;