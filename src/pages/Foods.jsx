import Heading from "../components/Heading";
import Food from "../components/Food";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DataLoding from "../components/DataLoding";
import { useState } from "react";
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from "react-icons/tfi";
import NoData from "../components/NoData";
import { Helmet } from "react-helmet-async";

const Foods = () => {
  const [is3Coloum, setIs3Coloum] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const {
    data: foods,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foods", search, sort],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/foods?search=${search}&sort=${sort}`
      );
      return data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("");
    const text = e.target.search.value;
    setSearch(text);
    refetch();
  };

  return (
    <section className="section page">
      <Helmet>
        <title>Available Foods || Food Hunter</title>
      </Helmet>
      <Heading
        heading="Available Foods"
        paragraph="Request for food that you needed"
      />

      <div className="flex items-center gap-2 my-8 justify-center ">
        <div className="relative w-full lg:w-2/5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-sm w-full"
              name="search"
              defaultValue={search}
            />

            <div className="absolute right-2 bottom-1/2 translate-y-1/2">
              <button
                type="submit"
                className="bg-green-400 dark:bg-green-800 dark:text-gray-300 px-3 rounded-sm py-1"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="w-2/5 sm:w-auto">
          <select
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered rounded-sm w-full"
            name="sort"
          >
            <option value="">Sort by Exp. Date</option>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
        </div>
        <div className="hidden lg:block">
          <button
            className="btn bg-green-100 dark:bg-green-900 dark:hover:bg-green-950 dark:text-gray-300 hover:bg-green-200"
            onClick={() => setIs3Coloum(!is3Coloum)}
          >
            Change Layout
            {is3Coloum ? (
              <TfiLayoutGrid3Alt size={24} />
            ) : (
              <TfiLayoutGrid2Alt size={24} />
            )}
          </button>
        </div>
      </div>

      {isLoading && <DataLoding height={`[300px]`} />}

      {(!foods || foods.length === 0) && !isLoading && (
        <div className="my-12">
          <NoData />
        </div>
      )}

      {foods?.length > 0 && (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${is3Coloum ? 'lg:grid-cols-3': 'lg:grid-cols-4'}
           gap-4`}
        >
          {foods?.map((food) => (
            <Food key={food._id} food={food} is3Coloum={is3Coloum} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Foods;
