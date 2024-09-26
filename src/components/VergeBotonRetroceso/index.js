// StyledButton.js
import React from 'react';
import styled from 'styled-components';
import useSoundButton from "../../hooks/useSoundButton";

// Define el botón circular con animaciones de hover
const CircularButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgba(8, 167, 255, 0.8);
  display: none;
  opacity: 0;
  transform: translateY(100%);
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.5s ease, opacity 0.5s ease-in-out;

  &:hover {
    background-color: rgba(8, 167, 255, 1); /* Color más oscuro para hover */
    transform: translateY(0) scale(1.1) !important;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  position: fixed;
  bottom: 1rem;
  right: 5.5rem;
  z-index: 1000;

  @media (max-width: 1050px) {
    bottom: 0.7rem;
    right: 5.5rem;
  }
`;

const VergeBotonRetroceso = () => {
    const { playHover, playClick, stopHover, stopClick } = useSoundButton();
  
    const handleMouseEnter = () => {
      stopHover();
      stopClick();
      playHover();
    };
  
    const handleButtonClick = () => {
      stopHover();
      stopClick();
      playClick();
    };

    return (
      <CircularButton onMouseEnter={handleMouseEnter} onClick={handleButtonClick} id='retroceso1'>
        <img src="/images/back.png" alt="icon" />
      </CircularButton>
    );
  };

export default VergeBotonRetroceso;
