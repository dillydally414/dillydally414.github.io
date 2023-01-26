import { ProjectType } from "../types";
import adventImg from "../assets/advent.jpg";
import edlawImg from "../assets/edlaw.png";
import imageEditorImg from "../assets/image-editor.png";
import knowYourOptionsImg from "../assets/know-your-options.png";
import websiteImg from "../assets/website-icon.svg";
import carpoolImg from "../assets/carpool.png";
import monkeybreadImg from "../assets/monkeybread.png";

const monkeybread: ProjectType = {
  name: "Monkeybread",
  description: `Monkeybread is a Python package I developed while at Immunitas Therapeutics.
  The package provides tools for analyzing single-cell spatial transcriptomics, a relatively modern
  area of interest. At the company, the tool is used to investigate target genes for cancer drugs.`,
  techUsed: "Python, Numpy, Pandas, Matplotlib",
  githubLink: "https://github.com/immunitastx/monkeybread",
  visualLink: "https://monkeybread.readthedocs.io/",
  start: "July 2022",
  end: "December 2022",
  image: monkeybreadImg,
  alt: "Monkeybread logo",
  type: "PROJECT",
};

const nuCarpool: ProjectType = {
  name: "NUCarpool",
  description: `NUCarpool is the app I did development work on last semester with Sandbox at Northeastern.
  This app provides an interface for students going on co-op to find other students to carpool with,
  particularly co-ops outside of the city. As a developer, I worked on features including recommendations
  and onboarding flow.`,
  techUsed: "React, Typescript, Next.js, MySQL, Mapbox, Jest, CSS",
  githubLink: "https://github.com/sandboxnu/nucarpool",
  visualLink: "https://nucarpool-46y7.vercel.app/",
  start: "September 2022",
  end: "December 2022",
  image: carpoolImg,
  alt: "Carpool logo",
  type: "PROJECT",
};

const edLaw: ProjectType = {
  name: "EdLaw",
  description: `EdLaw is the project I led with Sandbox at Northeastern.
  This project enables students and parents in the state of Massachusetts to report violations of educational
  rights to the appropriate government offices. As project lead, I coordinated team members to implement 
  new features, reviewed PRs, and communicated expectations and progress with the client. `,
  techUsed: "React, Typescript, Next.js, MongoDB, CSS",
  githubLink: "https://github.com/sandboxnu/edulaw",
  visualLink: "https://edulaw.vercel.app/",
  start: "January 2022",
  end: "September 2022",
  image: edlawImg,
  alt: "EdLaw app homepage",
  type: "PROJECT",
};

const knowYourOptions: ProjectType = {
  name: "Know Your Options",
  description: `Know Your Options is the first project I worked on with Sandbox at Northeastern. 
  The project aimed to make contraceptive information more accessible to the general public, and provided 
  research information to a professor at Northeastern. I worked as a full stack developer on this project, 
  and this was my introduction to all things React. Unfortunately, the project was dropped by the client in
  spring 2022 due to external circumstances, but was still a great learning experience.`,
  techUsed: "React, Typescript, styled-components, Next.js, PostgreSQL",
  githubLink: "https://github.com/sandboxnu/knowyouroptions",
  start: "September 2021",
  end: "December 2021",
  image: knowYourOptionsImg,
  alt: "Know your options app homepage",
  type: "PROJECT",
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
  type: "PROJECT",
};

const advent2022: ProjectType = {
  name: "Advent of Code",
  description: `Advent of Code is a yearly challenge where programmers all over the world compete to solve algorithmic puzzles
  as quick as possible. This was the second year I participated in Advent, doing the
  puzzles day by day as they were released. Keeping with tradition, I completed the challenges in a new language, this year being Rust.`,
  techUsed: "Rust",
  githubLink: "https://github.com/dillydally414/AoC-2022",
  start: "December 2022",
  end: "December 2022",
  image: adventImg,
  alt: "Advent star",
  type: "PROJECT",
};

const advent2021: ProjectType = {
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
  type: "PROJECT",
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
  type: "PROJECT",
};

const projects: Array<ProjectType> = [
  monkeybread,
  nuCarpool,
  advent2022,
  edLaw,
  knowYourOptions,
  thisWebsite,
  advent2021,
  imageEditor,
];

export default projects;
