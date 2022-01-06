

import styled from 'styled-components'
import App from './../img/iphone.png';
import AnimatedShape from './AnimatedShape';


const Container = styled.div`
  display: flex;
  
  @media only screen and (max-width:480px) {
    flex-direction: column;
    padding: 25px 15px;
  }
  `;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width:480px) {
    display: none;
  }
  
  `;

const Image = styled.img`
  width: 56vw;
  height: 100vh;
  object-fit: cover;
  position:relative;
  left:-150px;
  `;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  @media only screen and (max-width:480px) {
    width: 100%;
  }
  `;

const Title = styled.span`
  font-size: 100px;  
  @media only screen and (max-width:480px) {
    font-size: 50px;  

  }  
  `;

const Subtitle = styled.span`
  font-size: 28px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`

const Description = styled.p`
  font-size: 22px;
  color:#777;
  margin-top: 30px;
  
  `;

const Button = styled.button`
  width: 150px;
  border:none;
  padding: 15px 20px;
  background-color: darkblue;
  font-size: 22px;
  color: white;
  border-radius: 12px;
  margin-top: 30px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design<br />
          <b>good</b> business<br />
        </Title>
        <Subtitle>
          We know that good design means good business
        </Subtitle>
        <Description>
          We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals and look fantastic.
        </Description>
        <Description>
          We care your business and guarantee you to achieve marketing goals
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShape />
    </Container>
  )
}

export default Feature
