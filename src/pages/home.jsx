import Hero from "../components/Hero";
import Guide from '../components/Guide'
import Properties from "../components/Properties";
// import MoreDetail from "../components/MoreDetail";
import Featured from "../components/Featured";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
       <Featured />
      <Guide />
      <Properties />
      {/* <MoreDetail /> */}
     
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
