


import styled from 'styled-components'

const Container = styled.div`
  height: 10%;
  width: 100%;
  background-color: #111;
  color: lightgray;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  @media only screen and (max-width:480px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.li`
  margin-right: 20px;
  font-size: 20px;
  @media only screen and (max-width:480px) {
    font-size: 14px;
    margin-right: 10px;
  }
  `;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  
  @media only screen and (max-width:480px) {
    font-size: 14px;
  }
`;

const Symbol = styled.span`
  font-size: 22px;
  margin-left: 10px;
  position: relative;
  top: 2px;
  @media only screen and (max-width:480px) {
    font-size: 20px;
    margin-left: 0px;
  }
  
`;


const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Silver DevOps<Symbol>©</Symbol></Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer
