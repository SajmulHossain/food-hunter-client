import Heading from "./Heading";
import axios from "axios";
import Food from "./Food";
import { Link } from "react-router-dom";
import NoData from "./NoData";
import { useQuery } from "@tanstack/react-query";
import DataLoding from "./DataLoding";

const FeaturedFood = () => {

  const {data: foods, isLoading} = useQuery({queryKey: ['featuredFood'], queryFn: async () => {
    const { data } = await axios.get(
      "https://ph-assignment-11-server-phi.vercel.app/featuredFood?size=6"
    );
    return data;
  }})
  
  if(isLoading) {
    return <DataLoding />
  }

  return (
    <section className="my-12">
      <Heading heading="Featured Food" />

      {(!foods || foods?.length === 0) && <NoData />}

      {foods?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foods.map((food) => (
            <Food key={food._id} food={food} />
          ))}
        </div>
      )}

      <div className="text-center mt-6">
        <Link to="/foods" className="btn btn-primary">
          Show All
        </Link>
      </div>
    </section>
  );
};

export default FeaturedFood;
