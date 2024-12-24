import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ManageFoods = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/foods/${user?.email}`).then(({ data }) => {
      setFoods(data);
    });
  }, [user?.email]);
  return (
    <section>
      <Heading heading={`Your added Foods (${foods.length})`} />

      <div className="overflow-x-auto">
        <table className="table table-lg">
          {/* head */}
          <thead>
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
                  <span className={`${food?.status === 'Available' ? 'bg-green-100 text-green-700': 'text-red-700 bg-red-100'} px-3 py-1 rounded`}>{food.status}</span>
                </td>
                <td className="px-3">
                  <span className={`${food?.quantity >= 5 ? 'bg-green-100 text-green-700': 'text-red-700 bg-red-100'} px-3 py-1 rounded`}>{food.quantity}</span>
                </td>
                <td>{food.expiredDate}</td>
                <td className="flex items-center gap-2 justify-center">
                  <Link>
                    <FaEdit size={22} color="green" />
                  </Link>
                  <button>
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
