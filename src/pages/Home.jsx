import FeaturedFood from "../components/FeaturedFood";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <section>
      <div className="my-8">
        <HomeSlider />
        <FeaturedFood />
      </div>
    </section>
  );
};

export default Home;