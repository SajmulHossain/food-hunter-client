import FeaturedFood from "../components/FeaturedFood";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <section>
      <div className="my-8 lg:my-12">
        <HomeSlider />
      </div>
        <FeaturedFood />
    </section>
  );
};

export default Home;