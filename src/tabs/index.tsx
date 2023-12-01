import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import CV from "./CV";

const tabs = [
  { title: "home", element: <Home /> },
  { title: "experience", element: <Experience /> },
  { title: "projects", element: <Projects /> },
  { title: "cv", element: <CV /> },
] as const;

export default tabs;
