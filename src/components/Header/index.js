import React, { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../Provider/ThemesProvider/index";

import SettingsDarkImgURL from '../../icons/settings-dark.png';
import SettingsImgURL from './../../icons/settings.png';
import MoonImgURL from '../../icons/moon.png';
import SunImgURL from '../../icons/sun.png';
import CloseImgURL from '../../icons/close.png';
import CloseDarkImgURL from '../../icons/close-dark.png';
import MenuImgURL from '../../icons/menu.png';
import MenuDarkImgURL from '../../icons/menu-dark.png';
import audioClose from '../../assets/audios/open.mp3';
import audioOpen from '../../assets/audios/close.mp3';

import {
  Container,
  Logo,
  NavBar,
  ContainerSettings,
  SwitchTheme,
  SwitchSettings,
  ContainerMenu,
  IconMenu,
  ButtonClose,
  ContentFromTabletAndMobile
} from "./styles";

function usePlayerState() {
  const [srcAudio, setSrcAudio] = useState(audioOpen);
  const audio = useRef(null);

  useEffect(() => {
    let playerAudio = audio.current.play();

    if (playerAudio !== undefined) {
      playerAudio.then(_ => {
        playerAudio()
      })
        .catch(error => {
          console.log(error)
        });
    };
  }, [srcAudio]);

  function toggleSrcAudio() {
    srcAudio === audioOpen ? setSrcAudio(audioClose) : setSrcAudio(audioOpen)
  };

  return {
    srcAudio, toggleSrcAudio, audio
  };
}

export function Header() {
  const { theme, handleThemes } = useContext(ThemeContext);
  const { toggleSrcAudio, srcAudio, audio } = usePlayerState();

  const [themeVisible, setThemeVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  function showIconThemes() {
    themeVisible === true ? setThemeVisible(false) : setThemeVisible(true)
    toggleSrcAudio()
  };

  function handleThemesAndSrcAudio() {
    handleThemes()
    toggleSrcAudio()
  };

  return (
    <Container>
      <audio preload="auto" ref={audio} src={srcAudio} />

      <ContainerMenu menuItIsVisible={menuVisible}>
        <ButtonClose onClick={() => { setMenuVisible(false) }}>
          {theme.title === 'dark' ? (
            <img src={CloseImgURL} alt="Fechar menu" />
          ) : (
            <img src={CloseDarkImgURL} alt="Fechar menu" />
          )}
        </ButtonClose>

        <nav>
          <a href="#Home">Home</a>
          <a href="#AboutMe">About me</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </nav>

      </ContainerMenu>

      <ContentFromTabletAndMobile>
        {theme.title === 'dark' ? (
          <IconMenu
            onClick={() => { setMenuVisible(true) }}
            src={MenuImgURL}
            alt="??cone do menu"
          />
        ) : (
          <IconMenu
            onClick={() => { setMenuVisible(true) }}
            src={MenuDarkImgURL}
            alt="??cone do menu"
          />
        )}

        <div>
          <button>
            {theme.title === 'dark' ? (
              <img
                src={SunImgURL}
                onClick={handleThemesAndSrcAudio}
                alt="??cone de tema"
              />
            ) : (
              <img
                src={MoonImgURL}
                onClick={handleThemesAndSrcAudio}
                alt="??cone de tema"
              />
            )}
          </button>
        </div>
      </ContentFromTabletAndMobile>

      <Logo>GL</Logo>

      <NavBar>
        <a href="#Home">Home</a>
        <a href="#AboutMe">About me</a>
        <a href="#Skills">Skills</a>
        <a href="#Contact">Contact</a>
      </NavBar>

      <span> </span>
      <span> </span>
      <span> </span>

      <ContainerSettings>
        <SwitchTheme isVisible={themeVisible}>
          <button>
            {theme.title === 'dark' ? (
              <img
                src={SunImgURL}
                onClick={handleThemesAndSrcAudio}
                alt="??cone de tema"
              />
            ) : (
              <img
                src={MoonImgURL}
                onClick={handleThemesAndSrcAudio}
                alt="??cone de tema"
              />
            )}
          </button>
        </SwitchTheme>

        <SwitchSettings>
          {theme.title === 'dark' ? (
            <img
              src={SettingsImgURL}
              onClick={showIconThemes}
              alt="Configura????es do site"
            />
          ) : (
            <img
              src={SettingsDarkImgURL} 
              onClick={showIconThemes}
              alt="Configura????es do site"
            />
          )}
        </SwitchSettings>
      </ContainerSettings>
    </Container>
  );
};