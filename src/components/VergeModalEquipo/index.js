import React from 'react';
import styled from 'styled-components';

// Estilos para el contenedor centrado
const CenteredContainer = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0) !important;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const CardContainer = styled.div`
  background: rgb(0 0 0 / 66%);
  padding: 4rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  transition: opacity 0.5s ease;

  @media (max-width: 1050px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

// Estilos para el título del contenedor
const Title = styled.h2`
  font-weight: 500;
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 1050px) {
    font-size: 1.5rem;
  margin-bottom: .5rem;
  }
`;

// Estilos para el título del contenedor
const SubTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 1rem;

  @media (max-width: 1050px) {
    font-size: .8rem;
  }
`;

// Estilos para el contenedor de los tres cuadros
const Cards = styled.div`
  overflow-x: auto;
  max-width: 67vw;
  display: flex;
  gap: 2rem;

  /* Estilos para la barra de desplazamiento */
  ::-webkit-scrollbar {
    height: .3rem; /* Cambia la altura de la barra de desplazamiento horizontal */
  }

  ::-webkit-scrollbar-thumb {
    background-color: white; /* Color de la barra */
    border-radius: 1rem; /* Redondeo de la barra */
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(0 0 0 / 39%); /* Fondo de la barra */
  }

  /* Oculta las flechitas de la barra */
  ::-webkit-scrollbar-button {
    display: none;
  }

  @media (max-width: 1050px) {
    gap: 1rem;
  }
`;

// Estilos para cada cuadro (card)
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Sombra suave estilo Material UI
  background-color: rgb(0 0 0 / 39%);
  border-radius: 1.5rem;

  @media (max-width: 1050px) {
    width: 9rem;
    padding: .8rem;
    border-radius: 1rem;
  }
`;

// Estilos para la imagen
const Image = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;

  @media (max-width: 1050px) {
    width: 3rem;
    height: 3rem;
  }
`;

// Estilos para el texto descriptivo
const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #fff;
  margin-top: 1rem;

  @media (max-width: 1050px) {
    font-size: .8rem;
    margin-top: .5rem;
  }
`;

// Componente principal
const ModalEquipo = () => {
  return (
    <CenteredContainer className="content content3" style={{ zIndex: 30 }}>
      <CardContainer className="content content3">
        {/* Título del contenedor */}
        <div> 
          <Title>Equipo de Protección Personal</Title>
          <SubTitle>Estos son los EPP que se utilizan en este laboratorio</SubTitle>
        </div>

        {/* Tarjetas (Cards) */}
        <Cards>
          <Card>
            <Image src="/images/Barbiquejo.png" alt="Imagen 1" />
            <Description>Barbiquejo</Description>
          </Card>
          <Card>
            <Image src="/images/epp2.png" alt="Imagen 2" />
            <Description>Casco de protección</Description>
          </Card>
          <Card>
            <Image src="/images/epp3.png" alt="Imagen 3" />
            <Description>Lentes de seguridad</Description>
          </Card>
          <Card>
            <Image src="/images/epp4.png" alt="Imagen 3" />
            <Description>Zapatos de seguridad</Description>
          </Card>
          <Card>
            <Image src="/images/epp5.png" alt="Imagen 3" />
            <Description>Guantes de cuero</Description>
          </Card>
          <Card>
            <Image src="/images/epp6.png" alt="Imagen 3" />
            <Description>Ropa de trabajo</Description>
          </Card>
          <Card>
            <Image src="/images/epp7.png" alt="Imagen 3" />
            <Description>Chaleco Reflectante</Description>
          </Card>
          <Card>
            <Image src="/images/epp8.png" alt="Imagen 3" />
            <Description>Protección auditiva</Description>
          </Card>
          <Card>
            <Image src="/images/epp9.png" alt="Imagen 3" />
            <Description>Respirador de media cara o full face</Description>
          </Card>
          <Card>
            <Image src="/images/epp10.png" alt="Imagen 3" />
            <Description>Sistema de protección contra caídas</Description>
          </Card>
          <Card>
            <Image src="/images/epp11.png" alt="Imagen 3" />
            <Description>Línea o block retráctil</Description>
          </Card>
        </Cards>
      </CardContainer>
    </CenteredContainer>
  );
};

export default ModalEquipo;
