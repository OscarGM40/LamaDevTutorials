
import styled from 'styled-components'
import Pattern from './../img/45degreee_fabric.png';
import Map from '../img/map.png';
import Phone from '../img/phone.png';
import Send from '../img/send.png';


const Container = styled.div`
  height: 90%;
  background-image: url(${Pattern});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;  
  justify-content: center;
  `;

const FormContainer = styled.div`
  width:50%;
  position: relative;
  top: -30px;

`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  `;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 250px;
  padding: 15px 20px;
  font-size: 20px;
  `;

const TextArea = styled.textarea`
  width: 350px;
  height: 70%;
  padding: 15px 20px;
  font-size: 20px;
`;

const Button = styled.button`
  border:none;
  background-color: darkblue;
  color: white; 
  font-size: 22px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;

`;

const AddressContainer = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 40px;

`;

const AdressItem = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;

`;

const Icon = styled.img`
  width: 40px;
  margin-right: 20px;
  `;

const Text = styled.p`
  font-size: 22px;
  margin-right: 15px;
`;



const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Questions? <br />Let's Get In Touch</Title>
          <Form>
        <LeftForm >
          <Input placeholder="Your name"/>
          <Input placeholder="Your email"/>
          <Input placeholder="Subject"/>
        </LeftForm>
        <RightForm >
          <TextArea placeholder="Your message"/>
          <Button>Send</Button>
        </RightForm>
        </Form>
        </FormContainer>
        <AddressContainer>
        <AdressItem>
          <Icon src={Map}/>
          <Text>123 Park Avenue St., New York, NY 10001</Text>
        </AdressItem>
        <AdressItem>
          <Icon src={Phone}/>
          <Text>+1 124 545 745</Text>
          <Text>+4 123 456 789 </Text>
        </AdressItem>
        <AdressItem>
          <Icon src={Send}/>
          <Text>contact@oscar.devops</Text>
          <Text>sales@onosales.com</Text>
        </AdressItem>
        </AddressContainer>
      </Wrapper>      
    </Container>
  )
}

export default Contact
