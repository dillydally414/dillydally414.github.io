import { ExperienceType } from "../types";
import immunitasImg from "../assets/immunitas.jpg";
import sandboxImg from "../assets/sandbox_logo.png";
import northeasternImg from "../assets/northeastern.svg";

const immunitas: ExperienceType = {
  type: "EXPERIENCE",
  positions: [
    {
      title: "Computational Biologist",
      start: "July 2022",
      description: `As a co-op on the computational biology team at Immunitas, I investigated spatial
      transcriptomic data as part of the drug discovery pipeline. I worked primarily in Jupyter Notebooks,
      while abstracted forms of my analyses were incorporated into the Monkeybread package for future use.
      I also developed a machine learning pipeline for annotating cell types on spatial data. Through
      organizing and presenting slide decks on my work to non-computational scientists, I expanded my
      communication skills, primarily presentation and public speaking. This co-op gave me the opportunity
      to approach open-ended problems from many angles, while learning about diverse topics in programming and 
      immunology.`,
    },
  ],
  placeOfWork: "Immunitas Therapeutics",
  relevantTech:
    "Python, Scikit-Learn, Docker, Snakemake, Numpy, Pandas, Matplotlib, Jupyter Notebooks, Google Cloud",
  image: immunitasImg,
  alt: "Immunitas logo",
};

const sandbox: ExperienceType = {
  type: "EXPERIENCE",
  positions: [
    {
      title: "Head of Developer Experience",
      start: "August 2022",
      description: `As head of developer experience, I've coordinated onboarding workshops for new developers,
      aided projects with large-scale tech decisions, and scaffolded an internal wiki for knowledge transfer 
      purposes. Over the next year, I look to continue to build out the wiki, reducing the need for word-of-mouth
      discussions for standard practices and tech stack choices.`,
    },
    {
      title: "Project Lead",
      start: "January 2022",
      end: "August 2022",
      description: `As the project lead for EdLaw during the Spring 2022 semester, I was able to shape the future
      of the project at a higher level, as well as oversee personal improvements among team members, both developers
      and designers. Through holding 1-1s, leading standups, and presenting project progress to the client and other
      teams, my interpersonal skills and technical confidence evolved.`,
    },
    {
      title: "Developer",
      start: "August 2021",
      description: `Developing at Sandbox has given me a solid basis for web development and software engineering
      as a whole. By working with real clients and producing full-stack applications, we aim to follow industry
      standards while learning at our own pace. Additionally, the projects we take on focus on the Northeastern or
      surrounding areas, so the impacts of our work are directly felt by people in our very own community.`,
    },
  ],
  placeOfWork: "Sandbox at Northeastern",
  relevantTech: "React, Typescript, Next.js",
  image: sandboxImg,
  alt: "Sandbox logo",
};

const ta: ExperienceType = {
  type: "EXPERIENCE",
  positions: [
    {
      title: "Teaching Assistant",
      start: "January 2022",
      end: "June 2022",
      description: `As a teaching assistant for CS2510 (Accelerated Fundamentals of Computer Science 2) and CS3000
      (Algorithms and Data), I held office hours, led recitations/labs, and graded assignments for introductory
      computer science courses. CS2510 focuses on object-oriented development in Java, and CS3000 explores different
      algorithms as well as algorithmic theory, including time and space complexity. Being a TA for these classes
      allowed me to both reinforce my knowledge in multiple areas as well as further develop my communication
      and teaching skills.`,
    },
  ],
  placeOfWork: "Khoury College",
  relevantTech: "Java, LaTeX",
  image: northeasternImg,
  alt: "Northeastern University logo",
};

const experience: Array<ExperienceType> = [immunitas, sandbox, ta];

export default experience;
