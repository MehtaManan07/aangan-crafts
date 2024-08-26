import { useFetchProducts } from "../../hooks";
import { FeaturedProducts, Hero } from "./components";
import { HomeWrapper } from "./styles";

const Home = () => {
  useFetchProducts();
  return (
    <HomeWrapper className="section">
      <Hero />
      <FeaturedProducts />
    </HomeWrapper>
  );
};

export default Home;
