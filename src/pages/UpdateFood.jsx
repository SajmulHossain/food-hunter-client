import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import { compareAsc } from "date-fns";
import modal from "../utils/modal";
import { Helmet } from "react-helmet-async";

const UpdateFood = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [expiredDate, setExpiredDate] = useState(new Date());
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false);

  const handleUpdateFood = (e) => {
    e.preventDefault();
    isLoading(true);

    setError("");

    const form = e.target;

    const foodName = form.foodName.value;
    const image = form.image.value;
    const location = form.location.value;
    const quantity = parseInt(form.quantity.value);
    const status = form.status.value;
    const notes = form.notes.value;

    const donatorName = form.donatorName.value;
    const donatorEmail = form.donatorEmail.value;
    const donatorPhoto = form.donatorPhoto.value;

    if (isNaN(quantity)) {
      form.quantity.classList.add("border-red-600", "focus:border-red-600");
      return setError("Please give a valid quantity");
    } else {
      form.quantity.classList.remove("border-red-600", "focus:border-red-600");
    }

    if (quantity === 0) {
      form.quantity.classList.add("border-red-600", "focus:border-red-600");
      return setError("You must give the quantity atleast 1");
    } else {
      form.quantity.classList.remove("border-red-600", "focus:border-red-600");
    }

    if (compareAsc(new Date(), new Date(expiredDate)) === 1) {
      form.date.classList.add("border-red-600", "focus:border-red-600");
      return setError(`You can't add an expired food`);
    } else {
      form.date.classList.remove("border-red-600", "focus:border-red-600");
    }

    const data = {
      foodName,
      image,
      location,
      quantity,
      expiredDate,
      status,
      notes,
      donatorName,
      donatorEmail,
      donatorPhoto,
    };

    axios
      .put(
        `https://ph-assignment-11-server-phi.vercel.app/food/update/${id}`,
        data
      )
      .then(({ data }) => {
        if (data.modifiedCount) {
          modal("Food Update!", "Food Updated Succesfully", "success");
          navigate("/manage-foods");
          form.reset();
          isLoading(false);
        } else {
          modal("Food Update!", "Something went wrong", "error");
          isLoading(false);
        }
      });
  };

  useEffect(() => {
    axios
      .get(`https://ph-assignment-11-server-phi.vercel.app/food/${id}`)
      .then(({ data }) => {
        setFood(data);
      });
  }, [id]);

  useEffect(() => {
    if (food?.expiredDate) {
      setExpiredDate(new Date(food?.expiredDate));
    }
  }, [food]);

  return (
    <section className="section page">
      <Helmet>
        <title>Update Food || Food Hunter</title>
      </Helmet>
      <div className="hero-content px-0 flex-col">
        <div
          data-aos="flip-left"
          className="card w-full max-w-lg shrink-0 shadow-2xl border dark:bg-transparent border-green-600 bg-green-100 rounded"
        >
          <form onSubmit={handleUpdateFood} className="card-body px-4 lg:px-6">
            <h3 className="text-3xl text-center font-semibold mb-4 border-b py-2 border-green-950">
              Update Food!
            </h3>
            {error && <p className="text-red-600 text-center">{error}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                placeholder="Food Name"
                className="input input-bordered rounded-sm"
                name="foodName"
                required
                defaultValue={food.foodName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <input
                type="text"
                placeholder="Food Image"
                className="input input-bordered rounded-sm"
                name="image"
                required
                defaultValue={food.image}
              />
            </div>

            <div className="flex justify-between gap-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pickup Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="input input-bordered rounded-sm w-full"
                  name="location"
                  required
                  defaultValue={food.location}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered rounded-sm w-full"
                  name="quantity"
                  required
                  defaultValue={food.quantity}
                />
              </div>
            </div>

            <div className="flex justify-between gap-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expired Date</span>
                </label>
                <DatePicker
                  name="date"
                  className="input input-bordered rounded-sm w-full"
                  dateFormat="PP"
                  selected={expiredDate}
                  onChange={(value) => setExpiredDate(value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Status</span>
                </label>
                <input
                  type="text"
                  placeholder="Food Status"
                  className="input input-bordered rounded-sm w-full"
                  name="status"
                  value="Available"
                  readOnly
                  required
                  defaultValue={food.status}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Notes</span>
              </label>
              <textarea
                type="text"
                placeholder="Notes"
                className="input input-bordered pt-2 rounded-sm"
                name="notes"
                required
                defaultValue={food.notes}
              />
            </div>

            <div className="divider">Donator Info</div>

            <div className="flex justify-between gap-1">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Donator Name"
                  className="input input-bordered rounded-sm w-full"
                  name="donatorName"
                  value={user?.displayName}
                  readOnly
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Donator Email"
                  className="input input-bordered rounded-sm w-full"
                  name="donatorEmail"
                  value={user?.email}
                  readOnly
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Donator Image"
                className="input input-bordered rounded-sm w-full"
                name="donatorPhoto"
                value={user?.photoURL}
                readOnly
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white rounded-sm"
              >
                Update Food{" "}
                {loading && (
                  <span className="loading loading-spinner loading-xs"></span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateFood;
