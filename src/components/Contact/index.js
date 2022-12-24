import React from "react";

import LogoLinkedinImgURL from '../../icons/linkedin.png';
import EmailImgURL from '../../icons/mail.png';

import { Container, ContainerContactTop, ContainerContactBottom, CardContainerContactBottom } from "./styles";

export function Contact(){
  return(
    <Container  id="Contact">
      <ContainerContactTop>
        <h1>Entre em Contato comigo</h1>
        <p>Caso tenha interesse em mim, me chame no Linkedin, E-mail ou Whatsapp. Responderei o quanto antes.</p>
      </ContainerContactTop>
      <ContainerContactBottom>
        <CardContainerContactBottom>
          <div>
            <img src={LogoLinkedinImgURL} alt="Logo do linkedin" />
          </div>
          <h4>Linkedin</h4>
          <p>George Luiz</p>
          <a href="https://www.linkedin.com/in/george-luiz-42501b151/" target="_blank" rel="noopener noreferrer">Me mande um Olá</a>
        </CardContainerContactBottom>
        <CardContainerContactBottom>
          <div>
            <img src={EmailImgURL} alt="E-mail" />
          </div>
          <h4>E-mail</h4>
          <p>geluiz275@gmail.com</p>
          <a href="mailto:geluiz275@gmail.com">Me mande um e-mail</a>
        </CardContainerContactBottom>
        <CardContainerContactBottom>
          <div>
            <i class="fa-brands fa-whatsapp" ></i>
          </div>
          <h4>Whatsapp</h4>
          <p>11 98163-5005</p>
          <a href="https://wa.me/5511981635005?" target="_blank" rel="noopener noreferrer">Me mande um Olá</a>
        </CardContainerContactBottom>
      </ContainerContactBottom>
    </Container>
  );
};
