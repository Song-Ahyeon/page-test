import { Between, CustomText, MobileView } from "utils/common";
import { FooterBox, FooterWrapper, ImageArea, InfoArea } from "utils/layout/footer";

const Footer = () => {
  const customStyle = {
    color: "white",
    fontSize: "14px",
    fontWeight: "300",
    lineHeight: "22px",
    letterSpacing: '0.05em',
    display: 'inline-block',
  };
  const popOption = "top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no";

  return (
    <FooterWrapper>
      <FooterBox>
        {/* <Between>
          <ImageArea onClick={() => window.open("https://www.smu.ac.kr", '_blank')}>
            <img src="/svg/smu_logo_white.svg" style={{width: 'inherit', height: 'inherit'}} />
          </ImageArea>
        </Between> */}

        <InfoArea>
            <CustomText style={customStyle}>
                <CustomText onClick={() => window.open("", "이용약관", popOption)} style={{...customStyle, cursor: 'pointer'}}>
                이용약관
                </CustomText>
                &nbsp;|&nbsp;
                <CustomText onClick={() => window.open("", "개인정보 처리방침", popOption)} style={{...customStyle, cursor: 'pointer'}}>
                    개인정보 처리방침
                </CustomText>
                &nbsp;|&nbsp;
                <CustomText onClick={() => window.open("", "coypright", popOption)} style={{...customStyle, cursor: 'pointer'}}>
                    coypright text 
                </CustomText>
            </CustomText>
        </InfoArea>
      </FooterBox>
    </FooterWrapper>
  );
};

export default Footer;
