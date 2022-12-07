import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";
import { Link } from "react-router-dom";

const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
  position:absolute;
  width: 100%;
  box-shadow: 4px 4px 12px 4px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
`;

export const Brand = styled(Link)`
  padding: 0.1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: 10px;
  
 
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
    
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction:column;
    width: 100%;
    max-height: ${({isOpen})=>(isOpen ? "400px" : "0")};
    overflow: hidden;
    
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color:white;
  font-size: 1.5rem;
  transition: all 0.8s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
    transform: scale(1.3);
    transition: all 0.8s ease-in;
  
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

export default Nav;
