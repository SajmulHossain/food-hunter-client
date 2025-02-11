import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import DataLoding from "../components/DataLoding";
import Heading from "../components/Heading";
import NoData from "../components/NoData";
import { compareAsc, format } from "date-fns";
import { Helmet } from "react-helmet-async";

const FoodRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data } = useQuery({
    queryKey: [`requestedFood-${user?.email}`],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/requests?email=${user?.email}`);
      return data;
    },
  });

  // if(isLoading) {
  //   return <DataLoding />
  // }
  return (
    <section className="section page">
      <Helmet>
        <title>Food Request || Food Hunter</title>
      </Helmet>
      <Heading
        heading={`Food Request (${
          isLoading
            ? "..."
            : data?.length < 9
            ? `0${data.length}`
            : data?.length || 0
        })`}
        paragraph="Your Requested Foods Here"
      />

      {isLoading && <DataLoding height={`[300px]`} />}

      {(!data || data?.length === 0) && !isLoading && <NoData />}

      {data?.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table table-lg border">
            {/* head */}
            <thead className="bg-violet-300">
              <tr className="text-center">
                <th></th>
                <th>Food Name</th>
                <th>Donor Name</th>
                <td>PickUp Location</td>
                <th>Expired Date</th>
                <th>Request Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((food, index) => (
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-gray-300 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400"
                  } text-center`}
                  key={food._id}
                >
                  <th>{index + 1}</th>
                  <td>{food.foodName}</td>
                  <td>{food.donatorName}</td>
                  <td>{food.location}</td>
                  <td>
                    <span
                      className={`${
                        compareAsc(new Date(), new Date(food.expiredDate)) ===
                        -1
                          ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                          : "text-red-700 bg-red-100 dark:bg-red-800 dark:text-red-100"
                      } px-4 py-1 rounded inline-block`}
                    >
                      {food?.expiredDate
                        ? format(new Date(food.expiredDate), "PP")
                        : new Date()}
                    </span>
                  </td>
                  <td>
                    {food?.requestDate
                      ? format(new Date(food.requestDate), "PP")
                      : new Date()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default FoodRequest;
