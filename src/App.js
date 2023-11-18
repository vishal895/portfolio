import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./page/MainPage";
import Navbar from "./component/Navbar";
import AboutCard from "./component/AboutCard";
import ExperienceCard from "./component/ExperienceCard";
import Skill from "./component/Skill";
import ProjectCard from "./component/ProjectCard";

function App() {
  return (
    <div className="App bg-teal-900 ">
      <MainPage/>
    </div>
  );
}

export default App;
