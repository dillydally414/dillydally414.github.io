import { ProjectType } from "../types";
import adventImg from './advent.jpg';
import imageEditorImg from './image-editor.png';
import knowYourOptionsImg from './know-your-options.png';
import websiteImg from './website-icon.svg';

const knowYourOptions: ProjectType = {
  name: "Know Your Options",
  order: 0,
  description: "",
  techUsed: "React, Typescript, styled-components, Next.js, PostgreSQL",
  githubLink: "https://github.com/sandboxnu/knowyouroptions",
  start: "September 2021",
  image: knowYourOptionsImg,
  alt: "Know your options app homepage",
}

const thisWebsite: ProjectType = {
  name: "This Website",
  order: 1,
  description: "",
  techUsed: "React, Typescript, styled-components",
  githubLink: "https://github.com/dillydally414/dillydally414.github.io",
  visualLink: "https://dillydally414.github.io",
  start: "November 2021",
  image: websiteImg,
  alt: "Website icon",
}

const advent: ProjectType = {
  name: "Advent of Code",
  order: 2,
  description: "",
  techUsed: "Python",
  githubLink: "https://github.com/dillydally414/AoC-2021",
  start: "December 2021",
  end: "December 2021",
  image: adventImg,
  alt: "Advent star",
}

const imageEditor: ProjectType = {
  name: "Image Editor",
  order: 3,
  description: "",
  techUsed: "Java, Swing",
  start: "May 2021",
  end: "June 2021",
  image: imageEditorImg,
  alt: "Picture of image editor in use",
}

const projects: Array<ProjectType> = [
  knowYourOptions,
  thisWebsite,
  advent,
  imageEditor,
];

export default projects;