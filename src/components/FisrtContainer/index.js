import React from "react";

import { ButtonBG, ButtonNoBG } from "../Button/styles";
import MyCV from '../../assets/georgeLuiz.pdf';

import { ContainerHome, ContainerHomeTop, ContainerHomeBottom } from "./style";

export function FisrtContainer() {
  return (
    <ContainerHome>
      <ContainerHomeTop>
        <div>
          <img src="https://avatars.githubusercontent.com/u/82831712?v=4" alt="imagem do George Luiz" />
        </div>
        <div>
          <p>George</p>
          <p>Luiz</p>
        </div>
      </ContainerHomeTop>

      <ContainerHomeBottom>
        <p>Desenvolvedor Front-End</p>
        <div>
          <a href={MyCV} download="georgeLuiz" target="blank">
            <ButtonBG>Download CV</ButtonBG>
          </a>
          <a href="#Contact" >
            <ButtonNoBG>Entre em contato</ButtonNoBG>
          </a>
        </div>
      </ContainerHomeBottom>
      <span id="AboutMe"></span>
    </ContainerHome>
  );
};