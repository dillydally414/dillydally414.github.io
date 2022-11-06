import { ProjectType } from "../types";
import adventImg from "./advent.jpg";
import edlawImg from "./edlaw.png";
import imageEditorImg from "./image-editor.png";
import knowYourOptionsImg from "./know-your-options.png";
import websiteImg from "./website-icon.svg";

const edLaw: ProjectType = {
  name: "EdLaw",
  description: `EdLaw is the project I am currently working on with Sandbox at Northeastern.
  This project enables students and parents in the state of Massachusetts to report violations of educational
  rights to the appropriate government offices. As project lead, I coordinated team members to implement 
  new features, reviewed PRs, and communicated expectations and progress with the client. `,
  techUsed: "React, Typescript, Next.js, CSS",
  githubLink: "https://github.com/sandboxnu/edulaw",
  visualLink: "https://edulaw.vercel.app/",
  start: "January 2022",
  image: edlawImg,
  alt: "EdLaw app homepage",
};

const knowYourOptions: ProjectType = {
  name: "Know Your Options",
  description: `Know Your Options is the first project I worked on with Sandbox at Northeastern. 
  The project aims to make contraceptive information more accessible to the general public, and provided 
  research information to a professor at Northeastern. I worked as a full stack developer on this project, 
  and this was my introduction to all things React.`,
  techUsed: "React, Typescript, styled-components, Next.js, PostgreSQL",
  githubLink: "https://github.com/sandboxnu/knowyouroptions",
  start: "September 2021",
  end: "December 2021",
  image: knowYourOptionsImg,
  alt: "Know your options app homepage",
};

const thisWebsite: ProjectType = {
  name: "This Website",
  description: `This website was created to serve as a digital portfolio, for other people to see what kind of things I work on.
  Though the information is regularly updated, the website itself was built in a few weeks using Create-React-App.`,
  techUsed: "React, Typescript, styled-components",
  githubLink: "https://github.com/dillydally414/dillydally414.github.io",
  // visualLink: "https://dillydally414.github.io", This is kinda pointless since they're already on the website.
  start: "November 2021",
  image: websiteImg,
  alt: "Website icon",
};

const advent: ProjectType = {
  name: "Advent of Code",
  description: `Advent of Code is a yearly challenge where programmers all over the world compete to solve algorithmic puzzles
  as quick as possible. Though I had worked on previous year's challenges asynchronously, this was the first year I actually did the
  puzzles day by day as they were released. In addition, I added an extra challenge for myself by completing the challenges in Python,
  which I had never coded with previously.`,
  techUsed: "Python",
  githubLink: "https://github.com/dillydally414/AoC-2021",
  start: "December 2021",
  end: "December 2021",
  image: adventImg,
  alt: "Advent star",
};

const imageEditor: ProjectType = {
  name: "Image Editor",
  description: `This project was created for my Object-Oriented Design class. It supports features including layering images,
  image filters (blur, sharpen, sepia, etc), resizing images, and saving/loading edited images. Because it is a class project, 
  I cannot post the code publicly, but I would be happy to share the code and/or editor program on request.`,
  techUsed: "Java, Swing",
  start: "May 2021",
  end: "June 2021",
  image: imageEditorImg,
  alt: "Picture of image editor in use",
};

const projects: Array<ProjectType> = [
  edLaw,
  knowYourOptions,
  thisWebsite,
  advent,
  imageEditor,
];

export default projects;
