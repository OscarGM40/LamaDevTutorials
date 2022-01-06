import styled from 'styled-components'
import { useState } from 'react';

import ReadingTablet from '../img/WithTablet-PhotoRoom.png';
import MiniCard from './MiniCard';
import Play from '../img/play.png';
import VideoSample from '../videos/StyledComponentsLamaWebsite.mp4';

const Container = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width:480px) {
    flex-direction: column;
  }
  
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width:480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${props => props.open ? 'none' : 'block'};
  height: 100%;
  object-fit: cover;
  `;

const Video = styled.video`
  display: ${props => props.open ? 'block' : 'none'};
  height: 350px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin:auto ;
  @media only screen and (max-width:480px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  @media only screen and (max-width:480px) {
    width: 100%;
  }
  `;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width:480px) {
    padding: 20px;
    align-items: center;
  }
  
  `;

const Title = styled.h1`
  font-size: 40px;
  
  `;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  
/*   @media only screen and (max-width:480px) {
    flex-direction: column;
    margin-top: 20px;
  } */
`

const Description = styled.p`
  font-size: 20px;
  color: #555;
  margin-top: 20px;
  
  `

const Button = styled.button`
  width: 260px;
  border:none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 24px;
  padding: 15px 20px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const IconButton = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
 `;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color:white;
  padding: 5px;
  border-radius: 5px;
  border:none;
  right: 5px;
  top: 30%;
`;

const Service = () => {

  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
      <Left>
        <Image open={open} src={ReadingTablet} />
        <Video
          src={VideoSample}
          open={open} autoPlay loop controls/>
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Description>We provide digital experience services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.We work with you, not for you. Although we have a great resources
          </Description>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <IconButton src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      { smallScreen && open && (
        <Modal onClick={() => setOpen(false)}>
          <Video
            src={VideoSample}
            open={open} autoPlay loop controls/>
            <CloseButton onClick={() => setOpen(false)}>
              Close
            </CloseButton>
        </Modal>
      )}
    </Container>
  )
}

export default Service
