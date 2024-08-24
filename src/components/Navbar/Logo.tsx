import whiteLogo from "../../assets/logo-new.jpeg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img alt="aangan crafts" src={whiteLogo} />
    </Link>
  );
};
