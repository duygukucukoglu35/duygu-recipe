import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex.style';

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background:"#a33f7ebf";
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  border: 2px solid #a33f7ebf;
  border-radius: 7px;
  background: rgb(185,111,158);
background: radial-gradient(circle, rgba(185,111,158,1) 2%, rgba(187,117,162,1) 6%, rgba(208,168,195,1) 42%, rgba(235,236,240,1) 95%);
`;

export const ImgContainer = styled.div`
  border: 2px solid #a33f7ebf;
  padding: 10px;
  border-radius: 7px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled(Flex)`
  margin: 25px;
  margin-top:140px;
  img {
    width: 200px;
  }
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
