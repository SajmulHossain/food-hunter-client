import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import FeaturedFood from "../components/FeaturedFood";
import HomeSlider from "../components/HomeSlider";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Home || Food Hunter</title>
      </Helmet>
      <div className="my-8 lg:my-12">
        <HomeSlider />
      </div>
      <FeaturedFood />
      <Testimonial />
      <ContactForm />
    </section>
  );
};

export default Home;
