import styled from 'styled-components';
import womanImg from '../img/womanWithMobile03.png';
import AnimatedShape from './AnimatedShape';

const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;  
  padding: 20px 0px 0px 0px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`

const Desc = styled.p`
  width: 60%;
  font-size: 22px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  border:none;
  letter-spacing: 2px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color:#f0667d;
  font-weight: bold;
  font-size: 20px;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
  font-size: 18px;
`;


const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  border:none;
  
  
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures Agency in New York</Title>
        <Desc>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business</Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us +1 (123) 456-7890</Phone>
            <ContactText>
              For any question or corcern
            </ContactText>
          </Contact>

        </Info>
      </Left>
      <Right>
       <Image src={womanImg} />
      </Right>
      <AnimatedShape />
    </Container>
  )
}

export default Intro
