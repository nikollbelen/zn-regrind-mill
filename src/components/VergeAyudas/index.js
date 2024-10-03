// IconButtons.js
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import useSoundButton from "../../hooks/useSoundButton";

// Animación de parpadeo para el primer botón
const blinkAnimation = keyframes`
  50% {
    opacity: 0.5;
  }
`;

const deslizar = keyframes`
  from {
    transform: translateY(-30%);
    transform: translateX(200%);
  }
  to {
    transform: translateY(-30%);
    transform: translateX(0);
  }
`;

const ButtonContainer = styled.div`
  align-items: end;
  z-index: 40;
  position: fixed;
  bottom: 1rem;
  right: 1.2rem;
  display: none;
  flex-direction: column; /* Alinea los botones verticalmente */
  gap: 0.8rem;
  animation: ${deslizar} 1s ease-out; // Animación suave al aparecer desde la izquierda

  @media (max-width: 1050px) {
    bottom: 0.7rem;
    right: 1rem;
    gap: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Espacio entre descripción y botón */
`;

const IconButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "rgba(8, 167, 255, 0.8)" : "rgba(0,0,0,0.5)"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.5)" : "rgba(8, 167, 255, 0.8)"};
    transform: ${(props) => (props.disabled ? "none" : "scale(1.1)")};
  }

  &:active {
    background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.5)" : "rgba(8, 167, 255, 0.8)"};
    transform: ${(props) => (props.disabled ? "none" : "scale(0.9)")};
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  // Agrega la animación de parpadeo si es el primer botón y está activo
  ${(props) =>
    props.blinking &&
    css`
      animation: ${blinkAnimation} 1s ease infinite;
    `}
`;

const Description = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  background: rgb(0 0 0 / 66%);
  color: #fff;
  padding: 0.8rem;
  border-radius: 1rem;
  display: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1050px) {
    font-size: 0.8rem;
    max-width: 11rem;
    padding: 0.5rem;
  }
`;

// Hook para manejar sonidos
const useSound = (url) => {
  const audioRef = React.useRef(new Audio(url));

  const play = () => {
    if (audioRef.current) {
      if (audioRef.current) {
        audioRef.current.pause(); // Detiene la reproducción del audio actual
        audioRef.current.currentTime = 0; // Reinicia el tiempo de reproducción
      }
      audioRef.current = new Audio(url);
      audioRef.current.play();
    }
  };

  return { play };
};

const IconButtons = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [buttonsEnabled, setButtonsEnabled] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ]);
  // const [firstClick, setFirstClick] = useState(false); // Nueva variable para controlar el parpadeo

  // Carga los sonidos
  const { play: playMenuOpenSound } = useSound("/sounds/menu-open.mp3");
  const { playHover, playClick, stopHover, stopClick } = useSoundButton();

  const handleMouseEnter = () => {
    stopHover();
    stopClick();
    playHover();
  };

  const handleButtonClick2 = () => {
    stopHover();
    stopClick();
    playClick();
  };

  // Función para manejar el clic en un botón
  const handleButtonClick = (buttonIndex, buttonClass) => {
    var tiempo = 400;
    // Oculta todos los contenidos
    document.querySelectorAll(".content").forEach((element) => {
      element.style.transition = "opacity 0.5s ease-in-out";
      element.style.opacity = 0;
      if (element.style.display === "none") {
        tiempo = 0;
      } else {
        setTimeout(() => {
          element.style.display = "none";
        }, 400);
        tiempo = 400;
      }
    });
    setTimeout(() => {
      playMenuOpenSound();
      stopHover();
      stopClick();
      playClick();
      // Si el botón presionado ya está activo, desactívalo
      if (activeButton === buttonIndex) {
        setActiveButton(null);
        return;
      }

      // Muestra los elementos de la clase correspondiente
      const targetElements = document.querySelectorAll(`.${buttonClass}`);
      targetElements.forEach((element) => {
        element.style.display = "flex";
        setTimeout(() => {
          element.style.transition = "opacity 0.5s ease-in-out";
          element.style.opacity = 1;
        }, 0);
      });

      // Establece el botón activo
      setActiveButton(buttonIndex);

      // Habilita los otros botones si el primer botón fue presionado
      // if (buttonIndex === 0 && !firstClick) {
      //   setButtonsEnabled([true, true, true, true, true, true, true]);
      //   setFirstClick(true); // Desactiva el parpadeo
      // }
    }, tiempo);
  };

  // Efecto inicial para ocultar todos los contenidos y parpadear el primer botón
  // useEffect(() => {
  //   document.querySelectorAll(".content").forEach((element) => {
  //     element.style.display = "flex";
  //     element.style.transition = "opacity 0.5s ease-in-out";
  //     element.style.opacity = 0;
  //     setTimeout(() => {
  //       element.style.display = "none";
  //     }, 500);
  //   });
  // }, []);

  return (
    <ButtonContainer id="ayudas">
      {/* Primer botón con animación de parpadeo */}
      <ButtonWrapper>
        <Description className="content content1" style={{ zIndex: 30 }}>
          <p className='en'>Help</p><p className='es'>Ayuda</p>
        </Description>
        <IconButton
          active={activeButton === 0}
          // blinking={!firstClick && buttonsEnabled[0]}
          onMouseEnter={handleMouseEnter}
          onClick={() => handleButtonClick(0, "content1")}
          disabled={!buttonsEnabled[0]}
        >
          <img src="/images/ayuda.png" alt="Icon 1" />
        </IconButton>
      </ButtonWrapper>

      {/* Segundo botón */}
      <ButtonWrapper style={{ display: "none" }}>
        <Description className="content content1" style={{ zIndex: 30 }}>
          <p className='en'>Objectives</p><p className='es'>Objetivos</p>
        </Description>
        <IconButton
          active={activeButton === 1}
          onMouseEnter={handleMouseEnter}
          onClick={() => handleButtonClick(1, "content2")}
          disabled={!buttonsEnabled[1]}
        >
          <img src="/images/objetivo.png" alt="Icon 2" />
        </IconButton>
      </ButtonWrapper>

      {/* Tercer botón */}
      <ButtonWrapper style={{ display: "none" }}>
        <Description className="content content1" style={{ zIndex: 30 }}>
          <p className='en'>Equipment</p><p className='es'>Equipo</p>
        </Description>
        <IconButton
          active={activeButton === 2}
          onMouseEnter={handleMouseEnter}
          onClick={() => handleButtonClick(2, "content3")}
          disabled={!buttonsEnabled[2]}
        >
          <img src="/images/equipo.png" alt="Icon 3" />
        </IconButton>
      </ButtonWrapper>

      {/* Tercer botón */}
      <ButtonWrapper>
        <Description className="content content1" style={{ zIndex: 30 }}>
          <p className='en'>Information</p><p className='es'>Información</p>
        </Description>
        <IconButton
          active={activeButton === 3}
          onMouseEnter={handleMouseEnter}
          onClick={() => handleButtonClick(3, "content4")}
          disabled={!buttonsEnabled[3]}
        >
          <img src="/images/equipo.png" alt="Icon 4" />
        </IconButton>
      </ButtonWrapper>

      {/* Cuarto botón */}
      <ButtonWrapper>
        <Description className="content content1" style={{ zIndex: 30 }}>
          <p className='en'>Audio</p><p className='es'>Audio</p>
        </Description>
        <IconButton
          onMouseEnter={handleMouseEnter}
          onClick={handleButtonClick2}
          active={activeButton === 4}
          disabled={!buttonsEnabled[4]}
          id="btn_sonido"
        >
          <img src="/images/audio.png" id="btn_sonido_img" alt="Icon 4" />
        </IconButton>
      </ButtonWrapper>

      {/* Quinto botón */}
      <ButtonWrapper style={{ display: "none" }}>
        <Description className="content content1" style={{ zIndex: 30 }}>
          <p className='en'>Text</p><p className='es'>Texto</p>
        </Description>
        <IconButton
          onMouseEnter={handleMouseEnter}
          onClick={handleButtonClick2}
          active={activeButton === 5}
          disabled={!buttonsEnabled[5]}
        >
          <img src="/images/texto.png" alt="Icon 5" />
        </IconButton>
      </ButtonWrapper>

      {/* Sexto botón */}
      <ButtonWrapper style={{ display: "none" }}>
        <Description className="content content1" style={{ zIndex: 30 }}>
          <p className='en'>Language</p><p className='es'>Idioma</p>
        </Description>
        <IconButton
          onMouseEnter={handleMouseEnter}
          onClick={handleButtonClick2}
          active={activeButton === 6}
          disabled={!buttonsEnabled[6]}
          id="btn_lang"
        >
          <img src="/images/translation.png" alt="Icon 6" />
        </IconButton>
      </ButtonWrapper>
    </ButtonContainer>
  );
};

export default IconButtons;
