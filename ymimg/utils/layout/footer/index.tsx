import styled from "styled-components";

export const FooterWrapper = styled.footer`
  box-sizing: border-box;
  padding: 44px 20px 28px;
  margin-top: 80px;
  background: var(--palette-achromatic-500);
  @media only screen and (max-width: 579px){
    margin-top: 10px;
  }
`;
  
export const FooterBox = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  @media only screen and (max-width: 758px){
    flex-direction: column;
  }
`;

export const ImageArea = styled.div`
  width: 140px; 
  height: 40px;
  margin-right: 80px;
  cursor: pointer;
  @media only screen and (max-width: 758px){
    width: 90px; 
    height: 24px;
  }
`;

export const InfoArea = styled.div`
  @media only screen and (max-width: 758px){
    margin-top: 30px;
  }
`;
