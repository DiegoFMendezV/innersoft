import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: #2297bf;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 35px;
   bottom: 40px;
   height: 50px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #0d8d40;
   @media screen and (max-width: 960px){
      left: 20px;
      bottom: 45px;
      font-size: 2.5rem;
   }
`