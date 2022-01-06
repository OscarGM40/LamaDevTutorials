

import Search from '../img/search.png';
import styled from 'styled-components'

const Container = styled.div`
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 3px 3px 26px -3px #000000; 
  box-shadow: 3px 3px 26px -3px #000000;
  border-radius: 10px;
  /* justify-content: center; */
  align-items: center;
  @media only screen and (max-width:480px) {
    width: 100px;
    padding: 15px;
    height: 210px;
    overflow-y: hidden;
    margin-right: 10px;
  }
  `;

const Image = styled.img`
  width: 25px;
  `;

const Text = styled.span`
  margin-top: 15px;
  text-align: center;   
`;




const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tempore. Magni, facere nemo officiis eum saepe soluta! </Text>
    </Container>
  )
}

export default MiniCard
