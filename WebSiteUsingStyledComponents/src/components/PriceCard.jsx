



import styled from 'styled-components'

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 3px 3px 26px -3px #000000; 
  box-shadow: 3px 3px 26px -3px #000000;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width:480px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 70px;
  @media only screen and (max-width:480px) {
    font-size: 40px;
  }
`;


const Type = styled.button`
  padding: 10px;
  margin: 20px 0px 10px 0px;
  border: 1.5px solid crimson;
  color:crimson;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 22px;
   @media only screen and (max-width:480px) {
     display: none;
  }
  `;

const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  @media only screen and (max-width:480px) {
    margin-top: 0px;
  }
`;

const ListItem = styled.li`
   margin:30px auto;
   font-size: 20px;
   text-align: center;
   @media only screen and (max-width:480px) {
      font-size: 16px;
      margin: 5px 10px;
    }
`;

const Button = styled.button`
  border:none;
  background-color: darkblue;
  color: white;
  font-size: 22px;
  font-weight: bold;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  @media only screen and (max-width:480px) {
    margin-bottom: 0px;
    font-size: 16px;
    padding: 10px 15px;
  }
`;

const PriceCard = ({price,type}) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
        <Type>{type} Plan</Type>
        <List>
          <ListItem>Exclusive Support</ListItem>
          <ListItem>200 Hand-Crafted Templates</ListItem>
          <ListItem>50+ Prebuilt Websites</ListItem>
          <ListItem>Premium Plugins</ListItem>
        </List>
        <Button>Join Now </Button>
    </Container>
  )
}

export default PriceCard
