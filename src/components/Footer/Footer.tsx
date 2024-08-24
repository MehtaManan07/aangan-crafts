import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Aangan Crafts</span>
      </h5>
      <h5>{"  "}All rights reserved</h5>
    </FooterWrapper>
  );
};

export default Footer;
