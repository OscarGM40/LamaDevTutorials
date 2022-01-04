import styled from 'styled-components'
import { useState } from 'react';

import ReadingTablet from '../img/WithTablet-PhotoRoom.png';
import MiniCard from './MiniCard';
import Play from '../img/play.png';
import VideoSample from '../videos/StyledComponentsLamaWebsite.mp4';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  position: relative;
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
  margin:auto;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  
`;

const Title = styled.h1`
  font-size: 40px;
  
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
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

const Service = () => {

  const [open, setOpen] = useState(false);

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
            How it works</Button>
        </Wrapper>
      </Right>
    </Container>
  )
}

export default Service
