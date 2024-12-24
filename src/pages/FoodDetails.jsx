import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";

const FoodDetails = () => {
  const [food, setFood] = useState({});
  const { id } = useParams();

  const {
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
  } = food;

  useEffect(() => {
    axios.get(`http://localhost:3000/foods/${id}`)
    .then(({data}) => {
      setFood(data);
    })
  }, [id]);

  return (
    <section className="my-12">
      <Heading heading="Food Details" paragraph="Check all data to request" />

      <div
        className="border p-4 rounded border-green-800 bg-green-100 overflow-hidden max-w-screen-sm mx-auto flex flex-col gap-4 hover:scale-105 transition-all duration-500"
      >
        <div data-aos="fade-down">
          <img
            src={image}
            className="w-full rounded h-[400px] object-cover "
            alt={`${foodName}'s image`}
          />
        </div>

        <div>
          <h3 className="font-semibold text-xl lg:text-2xl">{foodName}</h3>
          <p className="flex items-center gap-1 mt-1 font-medium">
            <span>
              <IoLocationOutline />
            </span>

            {location}
          </p>

          <div data-aos="fade-left" className="divider">
            Donator Details
          </div>

          <div className="flex items-center border border-green-800 p-3 rounded-lg gap-2 mt-4 relative px-4">
            <div>
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={donatorPhoto}
                alt={`${donatorName}'s name photo`}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{donatorName}</h3>
              <p className="text-sm font-light">{donatorEmail}</p>
            </div>

            <p className="absolute right-4 bottom-full translate-y-1/2 bg-green-100 px-3 font-semibold">
              Donor
            </p>
          </div>

          <div data-aos="fade-right" className="divider">
            Food Details
          </div>

          <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center mx-auto mt-6">
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              <span className="bg-green-300 px-4 py-[2px] rounded text-green-700">
                {status}
              </span>
            </p>
            <p>
              <span className="font-semibold">Quantity:</span>{" "}
              <span className="bg-green-300 px-4 py-1 rounded text-green-700">
                {quantity}
              </span>
            </p>
            <p>
              <span className="font-semibold">Exp. Date:</span>{" "}
              <span className="bg-green-300 px-4 py-1 rounded text-green-700">
                {expiredDate}
              </span>
            </p>
          </div>

          <p className="mt-6 text-gray-600">{notes}</p>

          <div className="mt-4">
            <button className="btn w-full btn-primary">Request Food</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
