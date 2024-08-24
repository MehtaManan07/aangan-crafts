import hero from "../../../../assets/hero.jpg";
import { Link } from "react-router-dom";
import { HeroWrapper } from "./styles";

const Hero = () => {
  return (
    <HeroWrapper className="section-center">
      <article className="content">
        <HeroWords />
        <ShopNowButton />
      </article>
      <HeroImage />
    </HeroWrapper>
  );
};

export default Hero;

const HeroWords = () => {
  return (
    <>
      <h1>Leading the Way in Home Decorations</h1>

      <p>
        Explore our premium collection of elegant decorations for every
        occasion. From Diwali to daily elegance, we’re your trusted experts in
        creating beautiful spaces.
      </p>
    </>
  );
};

const ShopNowButton = () => {
  return (
    <Link className="btn hero-btn" to="/products">
      shop now
    </Link>
  );
};

const HeroImage = () => {
  return (
    <article className="img-container">
      <img alt="hero" className="main-img" src={hero} />
      {/* insert one more image here */}
    </article>
  );
};
