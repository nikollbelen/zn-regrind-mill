
import React from 'react';
import { PreloaderScreen, ContainerScreen, ContentScreen, WelcomeBox, Title, LogoScreen, Description, LoadingPercentage, Loader } from './styles';



function VergePreloader({ labName, imageUrl, logoUrl }) {
  return (
    <PreloaderScreen imageUrl={imageUrl}>
    <ContainerScreen>
      <ContentScreen>
        <WelcomeBox>
          <span>Bienvenid@ a:</span>
        </WelcomeBox>
        <Title>{labName}</Title>
        <Description>Por favor espera</Description>
        <LoadingPercentage id="loading_percentage">0%</LoadingPercentage>
        <Loader />
      </ContentScreen>
    </ContainerScreen>
    <LogoScreen>
      <img src={logoUrl} alt="Eduverso by TECSUP" />
    </LogoScreen>
  </PreloaderScreen>
  );
}

export default VergePreloader;