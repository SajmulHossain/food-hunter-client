import Heading from "../components/Heading";
import Food from "../components/Food";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DataLoding from "../components/DataLoding";

const Foods = () => {

  const {data:foods, isLoading} = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
      return data;
    },
  });

  if(isLoading) {
    return <DataLoding />
  }

  return (
    <section>
      <Heading
        heading="Available Foods"
        paragraph="Request for food that you needed"
      />

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
        {foods?.map((food) => (
          <Food key={food._id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default Foods;
