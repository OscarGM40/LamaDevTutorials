import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%, 65% 0%, 48% 100%, 100% 100%);
  background-color: crimson;
`;

 const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 48% 0%,34% 100%, 0% 100%);
  background-color: orange;
`;

 const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 34% 0%,48% 100%, 0% 100%);
  background-color: #f88497;
`;

export const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service /> 
        <ServiceShape />
      </Container>
    </>
  );
};
