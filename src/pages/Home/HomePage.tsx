import { useFetchProducts } from "../../hooks";
import { Contact, FeaturedProducts, Hero } from "./components";
import { HomeWrapper } from "./styles";

const Home = () => {
  useFetchProducts();
  return (
    <HomeWrapper className="section">
      <Hero />
      <FeaturedProducts />
      <Contact />
    </HomeWrapper>
  );
};

export default Home;
