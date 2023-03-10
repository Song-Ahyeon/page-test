// import { TopButton } from 'components/TopButton';
// import { ToastContainer } from "react-toastify";
import { Wrapper, Page } from "../../utils/common";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Wrapper>
      <Header />
      <Page>{props.children}</Page>
      <Footer />
      {/* <ToastContainer /> */}
      {/* <TopButton /> */}
    </Wrapper>
  );
};

export default Layout;
