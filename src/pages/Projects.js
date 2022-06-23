// import projectImg from "../images/halcyon.png"
import projectIMG from "../images/maze.png"
import { ButtonDemo, ButtonSource, ButtonTech } from "../components/Button"
import { AiFillGithub } from "react-icons/ai"

const params = {
  projectTitle: "PathFinding Algorithms",
  projectImage: projectIMG,
  projectDescription:
    "Generate Maze using Python, and solving the maze using A*, Dijkstra, etc. PathFinding algorithms",
  projectTech: ["HTML", "CSS", "JS"],
}

export const Projects = () => {
  return (
    <div className="projects">
      <h className="section-header">Prosjekter</h>
      <ProjectTemplate props={params} />
    </div>
  )
}

const ProjectTemplate = (props) => {
  const { projectTitle, projectImage, projectDescription, projectTech } = props

  return (
    <div className="project">
      <h3 className="projectTitle">{projectTitle}</h3>
      <img
        src={projectIMG}
        width={300}
        className="projectImage"
        alt="projectPhoto"
      />
      <p className="projectDescription">{projectDescription}</p>
      <div className="projectTech">
        {/* <p>Need a way to map over the array and generate button</p> */}
        <ButtonTech>Python</ButtonTech>
        <ButtonTech>Java</ButtonTech>
        <ButtonTech>CSS</ButtonTech>
        <ButtonTech>JS</ButtonTech>
        <ButtonTech>PyGame</ButtonTech>
        <ButtonTech>PyGame</ButtonTech>
      </div>
      <div className="actions">
        <ButtonDemo>Demo</ButtonDemo>
        <ButtonSource>
          <AiFillGithub size={18} /> Source Code
        </ButtonSource>
      </div>
    </div>
  )
}
