import { useEffect, useState } from "react";
import Heading from "./Heading";
import axios from "axios";
import Food from "./Food";
import { Link } from "react-router-dom";

const FeaturedFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("https://ph-assignment-11-server-phi.vercel.app/featuredFood?size=6")
      .then(({ data }) => setFoods(data));
  }, []);
  return (
    <section className="my-12">
      <Heading heading="Featured Food" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <Food key={food._id} food={food} />
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/foods" className="btn btn-primary">
          Show All
        </Link>
      </div>
    </section>
  );
};

export default FeaturedFood;
