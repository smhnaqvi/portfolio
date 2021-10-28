import Home from "../pages/home";
import Eeducation from "../pages/education";
import Projects from "../pages/projects";
import Experience from "../pages/experience";

export const Routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/projects",
    component: Projects
  },
  {
    path: "/education",
    component: Eeducation
  },
  {
    path: "/experience",
    component: Experience
  }
];

export default Routes;
