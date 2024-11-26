import Home from "./Home";
import Research from "./Research";
import Experience from "./Experience";
import Projects from "./Projects";
import CV from "./CV";

const tabs = [
  { title: "home", element: <Home /> },
  { title: "research", element: <Research /> },
  { title: "experience", element: <Experience /> },
  { title: "other projects", element: <Projects /> },
  { title: "cv", element: <CV /> },
] as const;

export default tabs;
