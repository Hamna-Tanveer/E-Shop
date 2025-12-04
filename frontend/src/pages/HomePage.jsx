import Header from "../components/Layout/Header";
import { Hero } from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts.jsx";
import Events from "../components/Events/Events.jsx";
import Sponsored from "../components/Route/Sponsored.jsx";
import Footer from "../components/Layout/Footer.jsx";
function HomePage() {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
      <Sponsored />
      <Footer />
    </div>
  );
}

export default HomePage;
