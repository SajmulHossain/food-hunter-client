import Heading from "../components/Heading";
import useAuth from "../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { compareAsc, format } from "date-fns";
import Swal from "sweetalert2";
import modal from "../utils/modal";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DataLoding from "../components/DataLoding";
import NoData from "../components/NoData";
import { Helmet } from "react-helmet-async";

const ManageFoods = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const { data: foods, isLoading } = useQuery({
    queryKey: [`addedFoodOf-${user?.email}`],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/foods/${user?.email}`);
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      await axiosSecure.delete(
        `https://ph-assignment-11-server-phi.vercel.app/food/${id}`
      );
    },
    onSuccess: () => {
      modal("Deleted!", "Your food has been deleted.", "success");
      queryClient.invalidateQueries({
        queryKey: [`addedFoodOf-${user?.email}`],
      });
    },
    onError: () => {
      modal("Error!", "Something went wrong", "error");
    },
  });

  const handleDeleteFood = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(id);
      }
    });
  };

  return (
    <section className="section page">
      <Helmet>
        <title>Manage Food || Food Hunter</title>
      </Helmet>
      <Heading
        heading={`Your Added Foods (${
          isLoading
            ? "..."
            : foods?.length < 9
            ? `0${foods.length}`
            : foods?.length || 0
        })`}
      />
      {isLoading && <DataLoding height={"[300px]"} />}

      {(!foods || foods?.length === 0) && !isLoading && <NoData />}

      {foods?.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table table-lg border">
            {/* head */}
            <thead className="bg-violet-300">
              <tr className="text-center">
                <th></th>
                <th>Food Name</th>
                <th>Status</th>
                <th>Quantity</th>
                <th>Expired Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {foods?.map((food, index) => (
                <tr key={food._id} className="text-center">
                  <th>{index + 1}</th>
                  <td>{food.foodName}</td>
                  <td className="px-3">
                    <span
                      className={`${
                        food?.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : food?.status === "Requested"
                          ? "text-blue-700 bg-blue-100"
                          : "text-red-700 bg-red-100"
                      } px-3 py-1 rounded`}
                    >
                      {food.status}
                    </span>
                  </td>
                  <td className="px-3">
                    <span
                      className={`${
                        food?.quantity >= 5
                          ? "bg-green-100 text-green-700"
                          : "text-red-700 bg-red-100"
                      } px-3 py-1 rounded`}
                    >
                      {food.quantity < 10 ? "0" + food.quantity : food.quantity}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`${
                        compareAsc(new Date(), new Date(food.expiredDate)) ===
                        -1
                          ? "bg-green-100 text-green-700"
                          : "text-red-700 bg-red-100"
                      } px-4 py-1 rounded inline-block`}
                    >
                      {food?.expiredDate
                        ? format(new Date(food.expiredDate), "PP")
                        : new Date()}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 justify-center">
                      <Link to={`/food/update/${food._id}`}>
                        <FaEdit size={22} color="green" />
                      </Link>
                      <button onClick={() => handleDeleteFood(food._id)}>
                       
                          <MdDelete size={22} color="red" />
                      </button>
                    </div>
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

export default ManageFoods;
