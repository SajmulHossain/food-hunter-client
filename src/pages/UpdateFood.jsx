import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";

const UpdateFood = () => {
  const { user } = useAuth();
  const [error, setError] = useState('');
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [expiredDate, setExpiredDate] = useState(new Date());

  console.log(food);

  useEffect(() =>{
    axios.get(`http://localhost:3000/food/${id}`).then(({ data }) => {
      setFood(data);
      console.log(data);
    });
  }, [])

  useEffect(() =>{
    if(food?.expiredDate) {
      setExpiredDate(new Date(food?.expiredDate));
    }
  },[food])


  return (
    <section className="min-h-screen my-4">
          <div className="hero-content flex-col">
            <div
              data-aos="flip-left"
              className="card w-full max-w-lg shrink-0 shadow-2xl border border-green-600 bg-green-100 rounded"
            >
              <form className="card-body">
                <h3 className="text-3xl text-center font-semibold mb-4 border-b py-2 border-green-950">
                  Add Food!
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
                    Add Food
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
  );
};

export default UpdateFood;