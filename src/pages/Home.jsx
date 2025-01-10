import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import FeaturedFood from "../components/FeaturedFood";
import HomeSlider from "../components/HomeSlider";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Home || Food Hunter</title>
      </Helmet>
      <div className="mb-8 lg:mb-12">
        <HomeSlider />
      </div>
      <FeaturedFood />
      <Testimonial />
      <Newsletter />
      <ContactForm />
    </section>
  );
};

export default Home;
