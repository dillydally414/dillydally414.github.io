import { ProjectType } from "../types";
import clockImg from './clock.svg';
import questionImg from './question-mark.svg';
const trafficImg = "https://cdn.glitch.com/489f9bfc-deff-49e0-b7a3-ba935d6fefae%2Ftraffic_light-removebg-preview.png?v=1613980588934";

const tliRemastered: ProjectType = {
  name: "Traffic Light Remastered",
  description: `After the game jam, I decided I wanted to continue development on Traffic Light Incremental 
  and make it into a longer/full-length game. However, between schoolwork and a job, my progress was very limited. 
  A few months in, I decided that I wanted to work with a new tech stack to broaden my skills. Instead of working with Javascript and direct HTML/CSS, 
  I began the process of transferring to React. To store the game state, I decided to use Redux. Though this game is still very much in development, I hope to 
  finish it by Spring 2022.`,
  techUsed: "React, Redux, Typescript, styled-components",
  githubLink: "https://github.com/dillydally414/TLI-React",
  start: "April 2021",
  image: trafficImg,
  alt: "Traffic light icon",
}

const secret: ProjectType = {
  name: "Secret Incremental",
  description: `The incremental game community has a running April Fool's tradition, where prank games are posted on the subreddit
  in the spirit of the holiday. This game was created with that purpose in mind, and is intentionally user-unfriendly.
  Despite being made in a few days, this game allowed me to further explore the intricacies of Javascript and CSS.`,
  techUsed: "Javascript, HTML/CSS, Vue.js",
  githubLink: "https://github.com/dillydally414/secret-incremental",
  visualLink: "https://dillydally414.github.io/secret-incremental/",
  start: "March 2021",
  end: "March 2021",
  image: questionImg,
  alt: "Question mark icon",
}

const tli: ProjectType = {
  name: "Traffic Light Incremental",
  description: `As a part of the second Incremental Game Jam, this game was created in one week with the theme 'Light'.
  Though Time deLayers was used as reference, the gameplay, storyline, and code was built from scratch. 
  This experience allowed me to more fully comprehend the workings of Javscript and HTML. 
  The game placed 8th overall out of 26 games, and 4th in the Balance category.`,
  techUsed: "Javascript, HTML/CSS, Vue.js",
  visualLink: "https://dillydally414.itch.io/traffic-light-incremental",
  start: "February 2021",
  end: "March 2021",
  image: trafficImg,
  alt: "Traffic light icon",
}

const timeDeLayers: ProjectType = {
  name: "Time deLayers",
  description: `My first venture into game development, Time deLayers is a modded version of another game, Time Layers. 
  The modification essentially makes the game much slower at first, giving it the title deLayers. 
  With this game, I was able to learn Javascript, HTML, and CSS basics, and work with the Vue library.`,
  techUsed: "Javascript, HTML/CSS, Vue.js",
  githubLink: "https://github.com/dillydally414/Time-deLayers/",
  visualLink: "https://dillydally414.github.io/Time-deLayers/",
  start: "January 2021",
  end: "March 2021",
  image: clockImg,
  alt: "Clock icon",
}

const games: Array<ProjectType> = [
  tliRemastered,
  secret,
  tli,
  timeDeLayers,
];

export default games;