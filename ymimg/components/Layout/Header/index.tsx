// import Navbar from "./Navbar";
import {
  HeaderWrapper,
  ImageWrapper,
  Inner,
  LeftArea,
  MenuItem,
  NavArea,
  RightArea,
  TopArea,
} from "../../../utils/layout/header";

const Header = () => {

return (
    <>
    <HeaderWrapper>
      <TopArea>
        <Inner>
        <LeftArea>
          <ImageWrapper>
            <img
              onClick={() => window.open("https://www.smu.ac.kr", '_blank')}
              style={{ cursor: "pointer" }}
              src={"/svg/smu_logo_white.svg"}
              alt="logo"
              width="56px"
              height="16px"
            />
          </ImageWrapper>
        </LeftArea>

        <RightArea>

        </RightArea>
      </Inner>
      </TopArea>

      <NavArea>
        <Inner style={{alignItems: 'center'}}>
        </Inner>
      </NavArea>
    </HeaderWrapper>
    </>
  );
};

export default Header;
