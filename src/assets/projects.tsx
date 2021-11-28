import { ProjectType } from "../types";

const knowYourOptions: ProjectType = {
  name: "Know Your Options",
  description: "",
  techUsed: "React, Next.js, Typescript, Styled Components, PostgresQL",
  githubLink: "https://github.com/sandboxnu/knowyouroptions",
  start: "September 2021"
}

const thisWebsite: ProjectType = {
  name: "This Website",
  description: "",
  techUsed: "React, Typescript, Styled Components",
  githubLink: "https://github.com/dillydally414/dillydally414.github.io",
  start: "March 2021"
}

const imageEditor: ProjectType = {
  name: "Image Editor",
  description: "",
  techUsed: "Java, Swing",
  start: "May 2021",
  end: "June 2021",
}

const projects: Array<ProjectType> = [
  knowYourOptions,
  thisWebsite,
  imageEditor,
];

export default projects;