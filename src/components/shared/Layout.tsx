import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollToTop from "./ScrollToTop";

export type Props = {
  children: React.ReactNode;
};

const Layput = ({ children }: Props) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layput;
