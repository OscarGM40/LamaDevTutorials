

import styled from 'styled-components'

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 20s linear alternate infinite;

  @keyframes square {
    to{
      transform: translate(100vw,100vh) rotate(360deg);
    }
  } 
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff97af;
  opacity: 0.7;
  position: absolute;
  bottom: 100px;
  left: -100px;
  z-index: -1;
  animation: circle 20s linear alternate infinite;
  
  @keyframes circle {
    to{
      transform: translate(100vw,-100vh);
    }
  }
`;

const Rectangle = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 300px;
  left: -50px;
  z-index: -1;
  animation: rectangle 20s linear alternate infinite;

  @keyframes rectangle {
    to{
      transform: translate(100vw,-50vh);
    }
  }
`;

const AnimatedShape = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rectangle />
    </>
  )
}

export default AnimatedShape
