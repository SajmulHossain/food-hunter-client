import Heading from "../components/Heading";
import Food from "../components/Food";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DataLoding from "../components/DataLoding";
import { useState } from "react";
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from "react-icons/tfi";

const Foods = () => {
  const [is2Coloum, setIs2Coloum] = useState(false);

  const { data: foods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
      return data;
    },
  });

  if (isLoading) {
    return <DataLoding />;
  }

  return (
    <section>
      <Heading
        heading="Available Foods"
        paragraph="Request for food that you needed"
      />

      <div className="flex items-center gap-2 my-4 justify-center">
        <div className="relative w-full lg:w-2/5">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-sm w-full"
            name="search"
            required
          />

          <div className="absolute right-2 bottom-1/2 translate-y-1/2">
            <button className="bg-green-400 px-3 rounded-sm py-1">
              Search
            </button>
          </div>
        </div>

        <div>
          <select className="select select-bordered rounded-sm" name="sort">
            <option>Sort by Exp. Date</option>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
        </div>
        <div className="hidden lg:block">
          <button className="btn btn-ghost" onClick={() => setIs2Coloum(!is2Coloum)}>
            {is2Coloum ? (
              <TfiLayoutGrid3Alt size={30} />
            ) : (
              <TfiLayoutGrid2Alt size={30} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
          is2Coloum ? "2" : "3"
        } gap-4`}
      >
        {foods?.map((food) => (
          <Food key={food._id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default Foods;
