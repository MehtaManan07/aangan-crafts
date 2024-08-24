import { Logo } from "./Logo";
import { MenuIcon } from "./MenuIcon";
import { NavLinks } from "./NavLinks";
import { NavContainer } from "./styles";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <MenuIcon />
        </div>
        <NavLinks className="nav-links" />
      </div>
      {/* <CartButtons /> */}
    </NavContainer>
  );
};

export default Navbar;
