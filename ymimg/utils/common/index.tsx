import styled, { StyledComponentBase } from "styled-components";

interface IBox extends StyledComponentBase<any, {}> {
  Wrapper?: any;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  overflow-x: hidden;
`;

export const WrapperGray = styled.div<{ height?: string, margin?: string }>`
  position: absolute;
  left: 0;
  width: 100vw;
  height: ${(props) => (props.height ? props.height : "300px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  background-color: var(--palette-achromatic-300);
  z-index: -1;
`;

export const Section = styled.section<{padding?: string, mobilePadding?: string}>`
  margin: 0;
  padding:  ${(props) => (props.padding ? props.padding : '20px')};
  @media only screen and (max-width: 579px){
    padding: ${(props) => (props.mobilePadding ? props.mobilePadding : props.padding ? props.padding : `20px`)};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: auto;
`;

export const Page = styled.div`
  width: 80%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 110px;
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
  @media all and (max-width: 480px) {
  }
`;

export const ButtonArea = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<{ isFocus?: boolean }>`
  ${(props) =>
    props.isFocus
      ? `background: var(--palette-blue-300);
  color: white;`
      : `background: white;
  color: var(--palette-blue-300);`}

  border: 1px solid var(--palette-blue-300);
  border-radius: 24px;
  text-align: center;
  padding: 0 4px;
  margin: auto 4px;
  font-size: 12px;
  font-weight: 600;
  width: 100px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background: var(--palette-blue-300);
    color: white;
    transition: 0.5s;
  }
  @media only screen and (max-width: 579px){
    width: 80px;
    height: 30px;
  }
`;

export const SmallButton = styled.button<{
  isFocus?: boolean;
  color?: string;
  focusColor?: string;
}>`
  ${(props) =>
    props.isFocus
      ? `background: ${props.focusColor ? props.focusColor : `var(--palette-blue-300)`};
  color: ${props.color ? props.color : `white`};`
      : `background: ${props.color ? props.color : `white`};;
  color: ${props.focusColor ? props.focusColor : `var(--palette-blue-300)`};;`}

  border: 1px solid white;
  border-radius: 24px;
  text-align: center;
  padding: 4px 1px;
  margin: auto 4px;
  font-size: 12px;
  font-weight: 600;
  width: 70px;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.focusColor ? props.focusColor : `var(--palette-blue-300)`)};
    color: ${(props) => (props.color ? props.color : `white`)};
    transition: 0.5s;
  }
`;

export const Text = styled.div`
  margin: auto 0;
`;

export const Input = styled.input<{
  color?: string;
  phColor?: string;
  fontSize?: string;
  mobileFontSize?: string;
}>`
  ${(props) => (props.phColor ? `::placeholder{color: ${props.phColor}}` : ``)}
  background: none;
  border-radius: 5px;
  border: none;
  padding: auto;
  margin: auto 0;
  color: ${(props) => (props.color ? `${props.color}` : "black")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : `16px`)};
  font-weight: 500;
  width: inherit;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 579px){
    font-size: ${(props) => (props.mobileFontSize? props.mobileFontSize : props.fontSize ? `${props.fontSize}` : `16px`)};
  }
`;

export const SelectWrapper = styled.div`
  background: aliceblue;
  border-radius: 5px;
  padding-right: 10px;
  margin: auto 0;
  cursor: pointer;
`;

export const Select = styled.select`
  background: aliceblue;
  border-radius: 5px;
  border: none;
  padding: 12px 15px;
  margin: 3px;
  color: black;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

export const Title = styled.div`
  margin: auto 0;
  font-size: 24px;
  font-weight: 600;
  z-index: 2;
  @media only screen and (max-width: 579px){
    font-size: 18px;
  }
`;

export const SubTitle = styled.div`
  margin: auto 0;
  font-size: 18px;
  font-weight: 600;
  z-index: 2;
`

export const Notice = styled.div`
  margin: auto 0;
  font-size: 12px;
  font-weight: 600;
`;

export const Box: IBox = styled.div`
  border: 2px solid black;
  min-width: 960px;
  max-width: 960px;
  margin: 10px 0;
  :nth-child(2n) {
    margin-left: 1rem;
  }

  :after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .inner {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

Box.Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export const ImageWrapper = styled.div`
  margin: auto;
  padding: auto;
`;

export const CardArea = styled.div`
  // display: flex;
  // flex-flow: wrap;
  margin: auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  @media only screen and (max-width: 900px){
    grid-template-columns: 50% 50%;
  }
  @media only screen and (max-width: 649px){
    grid-template-columns: 100%;
  }
 
  width: calc(100%);
`;

export const Between = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Center = styled(Flex)<{height?: string, padding?: string, minHeight?: string}>`
  flex-direction: column;
  width: 100%;
  height: ${props => props.height ? props.height : ''};
  min-height: ${props => props.minHeight ? props.minHeight : '130px'};
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding ? props.padding : '20px 0'};
`;

export const CustomText = styled.div<{
  size?: string;
  mobileSize?: string;
  weight?: string;
  color?: string;
  spacing?: string;
  margin?: string;
  lineHeight?: string;
}>`
  font-size: ${(props) => (props.size ? `${props.size}` : `16px`)};
  font-weight: ${(props) => (props.weight ? `${props.weight}` : `normal`)};
  color: ${(props) => (props.color ? `${props.color}` : `black`)};
  letter-spacing: ${(props) => (props.spacing ? `${props.spacing}` : `-0.05em`)};
  margin: ${(props) => (props.margin ? `${props.margin}` : 'auto 0')};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}` : '')};
  @media only screen and (max-width: 579px){
    font-size: ${(props) => (props.mobileSize ? `${props.mobileSize}` : props.size ? `${props.size}` : `16px`)};
  }
`;

export const CustomLinkText = styled.a<{
  size?: string;
  mobileSize?: string;
  weight?: string;
  color?: string;
  spacing?: string;
  margin?: string;
  lineHeight?: string;
  href?: string;}>`
  font-size: ${(props) => (props.size ? `${props.size}` : `16px`)};
  font-weight: ${(props) => (props.weight ? `${props.weight}` : `normal`)};
  color: ${(props) => (props.color ? `${props.color}` : `black`)};
  letter-spacing: ${(props) => (props.spacing ? `${props.spacing}` : `-0.05em`)};
  margin: ${(props) => (props.margin ? `${props.margin}` : 'auto 0')};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}` : '')};
  @media only screen and (max-width: 579px){
    font-size: ${(props) => (props.mobileSize ? `${props.mobileSize}` : props.size ? `${props.size}` : `16px`)};
  }
`

export const TotalText = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`;

export const TabArea = styled.ul`
  display: flex;
`;

export const FilterSortWrapper = styled(Between)`
  margin: 12px 0 26px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 30px;
  cursor: pointer;
`;

export const InputRadioWrapper = styled.div`
  display: flex;
`;

export const InputTextWrapper = styled.div``;

export const InputRadio = styled.input.attrs({ type: "radio" })`
  margin: 0 5px 0 0;
  cursor: pointer;
  // accent-color: var(--palette-indigo-200)
`;

export const DeadlinePicker = styled.div`
  width: '100%';
  box-sizing: border-box;
  outline: none;
  padding: 12px;
  border: 1px solid #AFB1B6;
  border-radius: 6px;
`

export const InputText = styled.input.attrs({ type: "text" })<{
  width?: string;
}>`
  width: ${(props) => props.width || "100%"};
  box-sizing: border-box;
  outline: none;
  padding: 12px;
  border: 1px solid #AFB1B6;
  border-radius: 6px;
  &::placeholder{
    color: #BDBDBD;
  }
`;

export const InputTextarea = styled.textarea.attrs({ type: "text" })<{
  width?: string;
  height?: string;
}>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || ""};
  box-sizing: border-box;
  resize: none; 
  outline: none;
  padding: 12px;
  border: 1px solid #AFB1B6;
  border-radius: 6px;
  &::placeholder{
    color: #BDBDBD;
  }
`;

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0 10px 0 0;
  cursor: pointer;
`;

export const FixedBottom = styled(Section)`
  background-color: var(--palette-achromatic-100);
  position: sticky;
  bottom: -10px;
`

export const ApplyButton = styled.div<{
  width?: string, 
  mobileWidth?: string, 
  height?: string, 
  color?: string, 
  size?: string,
  mobileSize?: string,
  backgroundColor?: string}> `
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.size ? props.size : '14px' };
  line-height: 160%;
  letter-spacing: -0.05em;

  color: ${(props) => (props.color ? `${props.color}` : `var(--palette-achromatic-100)`)};
  background-color: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : `var(--palette-blue-400)`)};
  border: 1px solid ${(props) => (props.color ? `${props.color}` : `var(--palette-blue-400)`)};
  height: ${(props) => props.height ? props.height : '48px' };
  width: ${(props) => props.width ? props.width : '' };
  border-radius: 6px;
  @media only screen and (max-width: 579px){
    width: ${(props) => props.mobileWidth ? props.mobileWidth : props.width ? props.width : '' };
    font-size: ${(props) => props.mobileSize ? props.mobileSize : props.size ? props.size : '14px' };
  }
`;

export const TopButtonCustom = styled.button<{show?: boolean}>`
  width: 66px;
  height: 66px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  transition: 1s;
  color: #1C1B1F;
  background-color: var(--palette-achromatic-100);
  border: none;
  border-radius: 33px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  opacity: ${(props)=>props.show ? '1' : '0'};
  transform: translateY(${(props)=>props.show ? '0' : '200%'});
  z-index: 9;
  @media only screen and (min-width: 1280px) {
    right: 11.5%;
  }
`;

export const ColorArea = styled.div<{ background?: string; borderColor?:string; radius?: string; padding?: string; }>`
  background: ${(props) => props.background || ``};
  border: 1px solid  ${(props) => props.borderColor || `#efeff0`};
  border-radius: ${(props) => props.radius || ``};
  padding: ${(props) => props.padding || `20px`};

`;

export const EditBox = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  color: var(--palette-achromatic-500);
  margin: 6px 0;
  svg{
    cursor: pointer;
  }
`

export const ShortText = styled(CustomText)<{line?: number}>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line ? props.line : 1}; 
  -webkit-box-orient: vertical;
`;

export const WebView = styled.div`
  @media only screen and (max-width: 579px){
    display: none;
  }
`;

export const MobileView = styled.div`
  position: static;
  @media only screen and (min-width: 580px){
    display: none;
  }
`;

// export * from "./Select";
