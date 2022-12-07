import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex.style';


 export const LoginContainer= styled(Flex)`
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;

`;

export const FormContainer= styled(Flex)`
  width: 30rem;
  height: 30rem;
  max-width: 50rem;
  background: #a33f7ebf;
  border-radius:10px;
  padding: 1rem;
  flex-direction: column;
  box-shadow: 4px 4px 12px 4px rgba(0, 0, 0, 0.3);
  margin-top: 20rem;
  @media (max-width:768px) {
  width: 100%;
  };
    
`;

export const Header = styled.h1`
  color: white;
  font-size: 3rem;
 
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 1.2rem;
  width: 20rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`

  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: white;
  border: none;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transform: scale(1.3);
    transition: all 0.6s ease-in;
  }
`;

export const StyledImg = styled.img`
  width: 180px;
  margin: 1rem;
`;