
// * Components
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Guide from '../components/Guide'
import Properties from "../components/Properties";
import MoreDetail from "../components/MoreDetail";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Reviews />
      <Guide />
      <Properties />
      <MoreDetail />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
