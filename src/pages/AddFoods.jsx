import { useState } from "react";
import useAuth from "../hooks/useAuth";
import modal from "../utils/modal";

const AddFoods = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");

  const handleAddFood = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;

    const foodName = form.foodName.value;
    const image = form.image.value;
    const location = form.location.value;
    const quantity = parseInt(form.quantity.value);
    const expiredDate = form.expiredDate.value;
    const status = form.status.value;
    const notes = form.notes.value;

    const donatorName = form.donatorName.value;
    const donatorEmail = form.donatorEmail.value;
    const donatorPhoto = form.donatorPhoto.value;


    if (isNaN(quantity)) {
      return setError("Please give a valid quantity");
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

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(({ insertedId }) => {
        if(insertedId) {
          modal('Food Donate!', 'Food added successfully', 'success');
        } else {
          modal('Food Donate!', 'Something went wrong!', 'error');
        }
      });
  };
  return (
    <section className="min-h-screen my-4">
      <div className="hero-content flex-col">
        <div
          data-aos="flip-left"
          className="card w-full max-w-lg shrink-0 shadow-2xl border border-green-600 bg-green-100 rounded"
        >
          <form onSubmit={handleAddFood} className="card-body">
            <h3 className="text-3xl text-center font-semibold mb-4 border-b py-2 border-green-950">
              Add Food!
            </h3>
            {error && <p className="text-red-500">{error}</p>}
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
              />
            </div>

            <div className="flex justify-between gap-2">
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
                />
              </div>
            </div>

            <div className="flex justify-between gap-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expired Date</span>
                </label>
                <input
                  type="text"
                  placeholder="Expired Date"
                  className="input input-bordered rounded-sm w-full"
                  name="expiredDate"
                  required
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
                {/* <label className="label">
                  <span className="label-text">Donator Name</span>
                </label> */}
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
                {/* <label className="label">
                  <span className="label-text">Donator Email</span>
                </label> */}
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
              {/* <label className="label">
                  <span className="label-text">Donator Email</span>
                </label> */}
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

export default AddFoods;
