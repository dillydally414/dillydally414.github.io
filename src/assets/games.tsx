import { ProjectType } from "../types";
import clockImg from './clock.svg';
import questionImg from './question-mark.svg';
const trafficImg = "https://cdn.glitch.com/489f9bfc-deff-49e0-b7a3-ba935d6fefae%2Ftraffic_light-removebg-preview.png?v=1613980588934";

// TODO: Update

const tliRemastered: ProjectType = {
  name: "Traffic Light Remastered",
  order: 0,
  description: "",
  techUsed: "React, Redux, Typescript, styled-components",
  githubLink: "https://github.com/dillydally414/TLI-React",
  start: "October 2021",
  image: trafficImg,
  alt: "Traffic light icon",
}

const secret: ProjectType = {
  name: "Secret Incremental",
  order: 1,
  description: "",
  techUsed: "JS, HTML/CSS, Vue.js",
  githubLink: "https://github.com/dillydally414/secret-incremental",
  visualLink: "https://dillydally414.github.io/secret-incremental/",
  start: "March 2021",
  end: "March 2021",
  image: questionImg,
  alt: "Question mark icon",
}

const tli: ProjectType = {
  name: "Traffic Light Incremental",
  order: 2,
  description: "",
  techUsed: "JS, HTML/CSS, Vue.js, HTML Canvas",
  githubLink: "https://github.com/dillydally414/dillydally414.github.io",
  visualLink: "https://dillydally414.itch.io/traffic-light-incremental",
  start: "February 2021",
  end: "March 2021",
  image: trafficImg,
  alt: "Traffic light icon",
}

const timeDeLayers: ProjectType = {
  name: "Time deLayers",
  order: 3,
  description: "",
  techUsed: "JS, HTML/CSS, Vue.js",
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