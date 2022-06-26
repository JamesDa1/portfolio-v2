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
} from "./Projects/ProjectElements";

import { projects } from "./Projects/Data";

import { AiFillGithub } from "react-icons/ai";

export const ProjectList = () => {
  return (
    <div className="projectContainer">
      {projects.map((project) => {
        return <ProjectTemplate id={project.id} {...project} />;
      })}
    </div>
  );
};

export const ProjectTemplate = (props) => {
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
            <ProjectDemo src={liveLink}>Demo</ProjectDemo>
            <ProjectSource src={sourceCode}>
              <AiFillGithub />
              Source Code
            </ProjectSource>
          </ProjectActions>
        </ProjectInfo>
      </ProjectContainer>
    </>
  );
};
