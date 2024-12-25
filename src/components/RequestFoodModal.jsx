/* eslint-disable react/prop-types */

import { format } from "date-fns";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";

const RequestFoodModal = ({ food }) => {
  const [requestDate, setRequestDate] = useState(new Date());
  const { user } = useAuth();
  return (
    <dialog id="my_modal" className="modal backdrop-blur-md">
      <div className="w-full px-4 mx-auto">
        <div className="modal-box hide-scroll px-4 md:px-6 w-full max-w-screen-lg mx-auto bg-violet-100">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form>
            <h3 className="font-bold text-xl lg:text-2xl text-center mb-6">
              Request Food
            </h3>
            <div className="flex flex-col gap-6">
              <fieldset className="border-t border-green-500 pt-2 rounded">
                <legend className="px-4 ml-6 font-semibold text-lg">
                  Food Info
                </legend>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <div className="form-control relative w-full">
                    <label className="label absolute bottom-1/2 top-1/2 right-2 py-0">
                      <span className="label-text bg-green-300 px-2 py-1 rounded">
                        Food Name
                      </span>
                    </label>

                    <input
                      type="text"
                      className="input input-bordered rounded-sm bg-green-50 focus:z-50"
                      name="foodName"
                      required
                      defaultValue={food.foodName}
                      readOnly
                    />
                  </div>
                  <div className="form-control relative w-full">
                    <label className="label absolute bottom-1/2 top-1/2 right-2 py-0">
                      <span className="label-text bg-green-300 px-2 py-1 rounded">
                        Food ID
                      </span>
                    </label>

                    <input
                      type="text"
                      className="input input-bordered rounded-sm bg-green-50 focus:z-50"
                      name="foodId"
                      required
                      defaultValue={food._id}
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                  <div className="form-control relative w-full">
                    <label className="label absolute bottom-1/2 top-1/2 right-2 py-0">
                      <span className="label-text bg-green-300 px-2 py-1 rounded">
                        PickUp Location
                      </span>
                    </label>

                    <input
                      type="text"
                      className="input input-bordered rounded-sm bg-green-50 focus:z-50"
                      name="location"
                      required
                      defaultValue={food.location}
                      readOnly
                    />
                  </div>
                  <div className="form-control relative w-full">
                    <label className="label absolute bottom-1/2 top-1/2 right-2 py-0">
                      <span className="label-text bg-green-300 px-2 py-1 rounded">
                        Expired Date
                      </span>
                    </label>

                    <input
                      type="text"
                      className="input input-bordered rounded-sm bg-green-50 focus:z-50"
                      name="expiredDate"
                      required
                      defaultValue={format(
                        new Date(food?.expiredDate || new Date()),
                        "PP"
                      )}
                      readOnly
                    />
                  </div>
                </div>

                <div className="form-control relative w-full mt-4">
                  <label className="label absolute bottom-1/2 top-1/2 right-2 py-0">
                    <span className="label-text bg-green-300 px-2 py-1 rounded">
                      Food Image
                    </span>
                  </label>

                  <input
                    type="text"
                    className="input input-bordered rounded-sm bg-green-50 focus:z-50"
                    name="image"
                    required
                    defaultValue={food.image}
                    readOnly
                  />
                </div>
              </fieldset>

              <fieldset className="border-t border-green-500 pt-2 rounded">
                <legend className="px-4 ml-6 font-semibold text-lg">
                  Donator Info
                </legend>

                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <div className="form-control relative w-full">
                    <label className="label absolute bottom-1/2 top-1/2 right-2 py-0">
                      <span className="label-text bg-green-300 px-2 py-1 rounded">
                        Donator Name
                      </span>
                    </label>

                    <input
                      type="text"
                      className="input input-bordered rounded-sm bg-green-50 focus:z-50"
                      name="donatorName"
                      required
                      defaultValue={food.donatorName}
                      readOnly
                    />
                  </div>
                  <div className="form-control relative w-full">
                    <label className="label absolute bottom-1/2 top-1/2 right-2 py-0">
                      <span className="label-text bg-green-300 px-2 py-1 rounded">
                        Donator Email
                      </span>
                    </label>

                    <input
                      type="text"
                      className="input input-bordered rounded-sm bg-green-50 focus:z-50"
                      name="foodName"
                      required
                      defaultValue={food.donatorEmail}
                      readOnly
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="border-t border-green-500 pt-2 rounded">
                <legend className="px-4 ml-6 font-semibold text-lg">
                  User Info
                </legend>

                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <div className="form-control relative w-full">
                    <label className="label absolute bottom-1/2 top-1/2 right-2 py-0">
                      <span className="label-text bg-green-300 px-2 py-1 rounded">
                        User Email
                      </span>
                    </label>

                    <input
                      type="text"
                      className="input input-bordered rounded-sm bg-green-50 focus:z-50"
                      name="userEmail"
                      required
                      defaultValue={user?.email}
                      readOnly
                    />
                  </div>
                  <div className="form-control relative w-full">
                    <label className="label absolute bottom-1/2 top-1/2 right-2 py-0 z-40">
                      <span className="label-text bg-green-300 px-2 py-1 rounded">
                        Request Date
                      </span>
                    </label>

                    <DatePicker
                      className="input input-bordered rounded-sm z-30 bg-green-50 w-full"
                      selected={requestDate}
                      dateFormat="PP"
                    />
                  </div>
                </div>
              </fieldset>

              <div>
                <textarea
                  type="text"
                  className="input input-bordered rounded-sm py-2 bg-green-50 w-full h-32"
                  defaultValue={food?.notes}
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="btn w-full hover:bg-green-700 bg-green-600 rounded text-white">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default RequestFoodModal;
