import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
`;

const ImageWrapper = styled.div`
  margin: auto 0;
  text-align: center;
`;

const TopArea = styled.div`
  background: var(--palette-achromatic-500);
  height: 100px;
  `;
  
  const Inner = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin: auto;
`;

const NavArea = styled.div`
  display: flex;
  background: white;
`;

export const LeftArea = styled.div`
  display: flex;
`;

export const RightArea = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  // font-family: 'Inter';
  margin-left: 14px;
  color: white;
  font-size: 12px;
  cursor: pointer;
`;

export { HeaderWrapper, ImageWrapper, Inner, TopArea, NavArea };
