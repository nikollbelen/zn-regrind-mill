import styled, { keyframes } from 'styled-components';

// Keyframes for the loader animation
export const spin = keyframes`
  0%, 100% { box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0; }
  12.5% { box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em; }
  25% { box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em; }
  37.5% { box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em; }
  50% { box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em; }
  62.5% { box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em; }
  75% { box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0; }
  87.5% { box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em; }
`;

export const PreloaderScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  flex-direction: column;
`;

export const ContainerScreen = styled.div`
  text-align: center;
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WelcomeBox = styled.div`
  font-size: 1.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding: .7rem 1.2rem;
  border-radius: 2rem;

  @media (max-width: 1050px) {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  word-wrap: break-word;
  margin-top: 1rem;
  font-size: 3rem;

  @media (max-width: 1050px) {
    margin-top: 1rem;
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  margin-top: 3rem;
  font-weight: 100;
  font-size: 1.5rem;

  @media (max-width: 1050px) {
    margin-top: 2rem;
    font-size: 1rem;
  }
`;

export const LoadingPercentage = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: .5rem;

  @media (max-width: 1050px) {
    font-size: 1rem;
  }
`;

export const Loader = styled.div`
  margin-top: 4vh;
  color: #fff;
  font-size: calc(0.4vw + 0.4vh);
  width: 1vh;
  height: 1vh;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${spin} 1.3s infinite linear;
  transform: translateZ(0);
`;

export const LogoScreen = styled.div`
  margin-bottom: 2rem;

  img {
    width: 14rem;
    height: auto;
  }

  @media (max-width: 1050px) {
    img {
      width: 12rem;
    }
  }
`;