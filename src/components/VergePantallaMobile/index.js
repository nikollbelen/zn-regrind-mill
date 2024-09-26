// FullScreenDiv.js
import React from "react";
import styled from "styled-components";

// Estilos para que el div ocupe toda la pantalla
const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Text = styled.h1`
  color: white;
  font-size: 3vh;
  margin: 0 7vh;
  text-align: center;
  line-height: 4vh;
  font-weight: bold;
`;

const Image = styled.img`
  width: 50vw;
  height: auto;
  filter: invert(1);
`;

// Componente que muestra el texto y la imagen
const VergePantallaMobile = () => {
  return (
    <FullScreenContainer id="aviso_celular" style={{ display: "none" }}>
      <Text>
        Pon tu celular en posición horizontal para poder acceder a la
        experiencia
      </Text>
      <Image
        src="/images/horizontal-icono.png"
        alt="Descripción de la imagen"
      />
    </FullScreenContainer>
  );
};

export default VergePantallaMobile;
