import styled from 'styled-components';
import Flex from '../globalStyles/Flex.style';

export const HeaderContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.mainColor};
  flex-direction: column;
`;

export const MainHeader = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid #a33f7ebf;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: 2px solid  rgb(185,111,158);
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;

export const Button = styled.button`
   background: rgb(185,111,158);
  /* background:lightgray; */
  padding: 6px;
  outline: none;
  height: 3rem;
  color:lightgray;
  border: 1px solid  rgb(185,111,158);
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    transition: all 0.4s ease-in;
    transform: scale(1.1);
    
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
  
`;