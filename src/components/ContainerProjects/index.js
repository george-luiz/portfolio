import React from "react";

import { Projects } from "../Projects";

import { Container,  Content } from "./styles";

export function ProjectsCarousel() {
  return (
    <Container>
      <h1>Esses são os Projetos de George Luiz</h1>
      <Content>
        <Projects />
      </Content>
    </Container>
  );
};