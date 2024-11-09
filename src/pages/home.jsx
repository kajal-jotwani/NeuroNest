import Hero from "../components/Hero";
import Guide from '../components/Guide'
import Properties from "../components/Properties";
// import MoreDetail from "../components/MoreDetail";
import Featured from "../components/Featured";
import FAQ from "../components/FAQ";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
       <Featured />
      <Guide />
      <Properties />
      <FAQ/>
      {/* <MoreDetail /> */}
     
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
