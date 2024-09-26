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
  background: linear-gradient(to right, rgba(74, 100, 255, 0.8), rgba(8, 167, 255, 0.8));
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

  @media (max-width: 1050px) {
    font-size: 1.5rem;
  }
`;

// Estilos para el contenedor de los tres cuadros
const Cards = styled.div`
  display: flex;
  gap: 2rem;

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
  background-color: rgba(20, 25, 44, 0.7);
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
const ModalObjetivos = () => {
  return (
    <CenteredContainer className="content content2" style={{ zIndex: 30 }}>
      <CardContainer className="content content2">
        {/* Título del contenedor */}
        <Title>Objetivos del Laboratorio</Title>

        {/* Tarjetas (Cards) */}
        <Cards>
          <Card>
            <Image src="/images/lupa.png" alt="Imagen 1" />
            <Description>Inspeccionar visualmente el equipo 500-FL-0356 Zn Regrind Mill, identificando su capacidad de diseño, dimensiones y la función que desempeña en el proceso de filtración.</Description>
          </Card>
          <Card>
            <Image src="/images/componentes.png" alt="Imagen 2" />
            <Description>Analizar los componentes principales del equipo, como la placa móvil, la placa fija, el sistema de alimentación y la unidad hidráulica, para comprender su estructura y funcionamiento.</Description>
          </Card>
          <Card>
            <Image src="/images/proceso.png" alt="Imagen 3" />
            <Description>Evaluar el principio de operación del equipo, observando los procesos de cierre, prensado, lavado de cámaras, separación sólido-líquido, secado y descarga para entender el ciclo completo de operación.</Description>
          </Card>
        </Cards>
      </CardContainer>
    </CenteredContainer>
  );
};

export default ModalObjetivos;
