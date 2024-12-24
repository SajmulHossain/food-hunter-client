/* eslint-disable react/prop-types */

import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Food = ({food}) => {
  const {
    _id,
    foodName,
    image,
    location,
    expiredDate,
    status,
    donatorName,
    donatorEmail,
    donatorPhoto,
  } = food || {};
  return (
    <div className="border hover:scale-105 transition-all duration-500 border-green-800 bg-green-200 p-4 rounded flex flex-col justify-between">
      <div>
        <img
          referrerPolicy="no-referrer"
          src={image}
          className="w-full h-[300px] object-cover rounded-md"
          alt={`${foodName}'s image`}
        />
      </div>

      <h3 className="mt-4 font-semibold text-2xl">{foodName}</h3>

      <p className="flex items-center gap-1 mt-1 font-medium">
        <span>
          <IoLocationOutline />
        </span>

        {location}
      </p>

      <div className="flex items-center border border-green-800 p-3 rounded-lg gap-2 mt-4 relative">
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

        <p className="absolute right-4 bottom-full translate-y-1/2 bg-green-200 px-3 font-semibold">
          Donor
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p
            className={`${
              status === "Available"
                ? "bg-blue-200 text-blue-900 w-fit px-4 py-1 rounded-sm"
                : ""
            }`}
          >
            {status}
          </p>
        </div>
        <div>
          <p className="flex items-center gap-1 font-semibold text-blue-800">
            <span>
              <CiCalendarDate size={24} />
            </span>{" "}
            {expiredDate}
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="mt-4">
        <Link
          to={`/foods/${_id}`}
          className="btn w-full bg-green-600 text-white rounded hover:bg-green-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Food;