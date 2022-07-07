import {
  ProjectContainer,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectImgWrapper,
  ProjectImg,
  ProjectSource,
  ProjectActions,
  ProjectDemo,
  ProjectTechWrap,
  ProjectTech,
} from "./ProjectElements";

import { projects } from "./Data";
import { AiFillGithub } from "react-icons/ai";

export const ProjectList = () => {
  return (
    <div className="projectsContainer">
      <h1>Prosjekter</h1>
      {projects.map((project) => {
        return <ProjectTemplate id={project.id} {...project} />;
      })}
    </div>
  );
};

const ProjectTemplate = (props) => {
  const { title, description, tech, img, sourceCode, liveLink } = props;
  return (
    <>
      <ProjectContainer>
        <ProjectImgWrapper>
          <ProjectImg src={img} />
        </ProjectImgWrapper>
        <ProjectInfo>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectTechWrap>
            {tech.map((tech) => {
              return <ProjectTech>{tech}</ProjectTech>;
            })}
          </ProjectTechWrap>
          <ProjectActions>
            <ProjectDemo
              onClick={() => window.open(liveLink, "_blank")}
              src={liveLink}
            >
              Demo
            </ProjectDemo>
            <ProjectSource
              onClick={() => window.open(sourceCode, "_blank")}
              src={sourceCode}
            >
              <AiFillGithub />
              Source Code
            </ProjectSource>
          </ProjectActions>
        </ProjectInfo>
      </ProjectContainer>
    </>
  );
};
