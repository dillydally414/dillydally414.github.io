import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

const tabs = [
  { title: "home", element: <AboutMe /> },
  { title: "experience", element: <Experience /> },
  { title: "projects", element: <Projects /> },
  { title: "cv", element: <span>cv</span> },
] as const;

export default tabs;
