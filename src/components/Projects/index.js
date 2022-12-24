import React from "react";

import { projectsFiles } from "../../Services/projects";
import { ButtonBG } from "../Button/styles";

import {
  CardProjects,
  ContainerTopCard,
  TechsProject,
  ContainerBottomCard,
  NumberToProject
} from "./style";

export function Projects() {
  const numberProject = index => index + 1 < 10 ? `0${index + 1}` : index + 1;

  return (
    <>
      {projectsFiles.map((project, index) =>
        <CardProjects key={index}>
          <a href={project.deploy} target="_blank" rel="noopener noreferrer">
            <ContainerTopCard>
              <img src={project.img} alt="Imagem do projeto" />
            </ContainerTopCard>
          </a>

          <h3>{project.name}</h3>
          <TechsProject>{project.techs}</TechsProject>

          <ContainerBottomCard>
            <NumberToProject>{numberProject(index)}</NumberToProject>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" ><ButtonBG>Repositório</ButtonBG></a>
          </ContainerBottomCard>
        </CardProjects>
      )}
    </>
  );
}