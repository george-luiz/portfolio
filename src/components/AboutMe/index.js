import React, { useEffect, useState } from "react";

import { ImgToggleColor } from ".././ImgToggleColor/index.js";

import KeyboardAndCoffeImgURL from "../../assets/keyboardandcoffe.jpg";
import LogoLinkedinImgURL from "../../icons/linkedin.png";
import LogoGitHubImgURL from "../../icons/logo-github.png";
import LogoLinkedinDarkImgURL from "../../icons/linkedin-dark.png";
import LogoGitHubDarkImgURL from "../../icons/logo-github-dark.png";
import LogoGitHubsecondaryImgURL from "../../icons/logo-github-secondary.png";
import LogoLinkedinsecondaryImgURL from "../../icons/linkedin-secondary.png";

import {
  ContainerAbout,
  ContainerAboutBottom,
  CardImgsAndSocial,
  ContainerSocialMedia,
  ContainerSocialMedia768,
  WorksSection,
  TextAnimation,
  ImgCoffe,
} from "./styles";

export const AboutMe = () => {
  const [workAnimation, setWorkAnimation] = useState("Disposto.");
  const [indexWorkCurrent, setIndexWorkCurrent] = useState(1);

  const works = ["disposto.", "otimista", "persistente", "esforçado"];

  useEffect(() => {
    setTimeout(() => {
      setIndexWorkCurrent((prev) => prev + 1);

      if (indexWorkCurrent >= 4) {
        setIndexWorkCurrent(0);
      }

      setWorkAnimation(works[indexWorkCurrent]);
    }, 4000);
  }, [indexWorkCurrent]);

  return (
    <ContainerAbout>
      <h1>
        George é um desenvolvedor{" "}
        <WorksSection>
          <TextAnimation> {workAnimation}</TextAnimation>
        </WorksSection>
      </h1>

      <ContainerAboutBottom>
        <div>
          <p>
            Olá{" "}
            <span role="img" aria-label="Emoji rosto piscando">
              😉
            </span>
          </p>
          <p>
            Meu nome é George Luiz, tenho 26 anos e moro em São Paulo (SP).
            Atualmente atuo como Desenvolvedor Front-End.
          </p>
          <p>
            Sou um rapaz ágil e consistente em aprender
            uma nova linguagem e me adaptar a qualquer mudança, pronto para
            superar qualquer desafio! Se eu pudesse me definir em 4 palavras
            certamente seriam: disposto, otimista, persistente e esforçado! ;)
          </p>
          <p>
            Sigo a conduta de que "Primeiro você faz, depois você melhora". Pois
            assim, consigo criar coisas incríveis e depois melhorá-las.
          </p>

          <ContainerSocialMedia>
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
          </ContainerSocialMedia>
        </div>

        <CardImgsAndSocial>
          <ImgCoffe src={KeyboardAndCoffeImgURL} alt="Teclado e café" />

          <ContainerSocialMedia768>
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
          </ContainerSocialMedia768>
        </CardImgsAndSocial>
      </ContainerAboutBottom>

      <span id="Skills"></span>
    </ContainerAbout>
  );
};
