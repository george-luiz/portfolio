import React, { useContext } from "react";
import { ThemeContext } from '../../Provider/ThemesProvider/index';

import { ImgToggleColor } from '../ImgToggleColor/index.js'

import LogoGitHubImgURL from '../../icons/logo-github.png';
import LogoLinkedinImgURL from '../../icons/linkedin.png';
import EmailImgURL from '../../icons/mail.png';
import LogoGitHubDarkImgURL from '../../icons/logo-github-dark.png';
import LogoLinkedinDarkImgURL from '../../icons/linkedin-dark.png';
import EmailDarkImgURL from '../../icons/mail-dark.png';
import LogoGitHubsecondaryImgURL from '../../icons/logo-github-secondary.png';
import LogoLinkedinsecondaryImgURL from '../../icons/linkedin-secondary.png';
import EmailImgsecondaryURL from '../../icons/mail-secondary.png';

import { Container, SocialMidia, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <SocialMidia>
          <ImgToggleColor
            link="https://github.com/george-luiz"
            imgWhite={LogoGitHubImgURL}
            imgDark={LogoGitHubDarkImgURL}
            imgHover={LogoGitHubsecondaryImgURL}
            alt="Logo GitHub"
          />

          <ImgToggleColor
            link="https://www.linkedin.com/in/george-luiz-42501b151/"
            imgWhite={LogoLinkedinImgURL}
            imgDark={LogoLinkedinDarkImgURL}
            imgHover={LogoLinkedinsecondaryImgURL}
            alt="Logo LinkedIn"
          />

          <ImgToggleColor
            link="mailto:geluiz275@gmail.com"
            imgWhite={EmailImgURL}
            imgDark={EmailDarkImgURL}
            imgHover={EmailImgsecondaryURL}
            alt="E-mail"
          />
        </SocialMidia>

        <span>|</span>
        <p>George Luiz © 2022</p>
        <span></span>
      </Content>
    </Container>
  );
};