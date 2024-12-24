import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { compareAsc, format } from "date-fns";
import Swal from "sweetalert2";
import modal from "../utils/modal";
import { Link } from "react-router-dom";

const ManageFoods = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  const handleDeleteFood = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/food/${id}`).then(({ data }) => {
          if (data.deletedCount) {
            modal("Deleted!", "Your food has been deleted.", "success");
          } else {
            modal("Error!", "Something went wrong", "error");
          }
        });
      }
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/foods/${user?.email}`).then(({ data }) => {
      setFoods(data);
    });
  }, [user?.email]);
  return (
    <section className="my-12">
      <Heading heading={`Your added Foods (${foods.length})`} />

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
                    {food.quantity < 10 ? '0'+ food.quantity : food.quantity}
                  </span>
                </td>
                <td>
                  <span
                    className={`${
                      compareAsc(new Date(), new Date(food.expiredDate)) === -1
                        ? "bg-green-100 text-green-700"
                        : "text-red-700 bg-red-100"
                    } px-4 py-1 rounded`}
                  >
                    {food?.expiredDate
                      ? format(new Date(food.expiredDate), "PP")
                      : new Date()}
                  </span>
                </td>
                <td className="flex items-center gap-2 justify-center">
                  <Link to={`/food/update/${food._id}`}>
                    <FaEdit size={22} color="green" />
                  </Link>
                  <button onClick={() => handleDeleteFood(food._id)}>
                    <MdDelete size={22} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageFoods;
