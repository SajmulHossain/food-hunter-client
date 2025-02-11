/* eslint-disable react/prop-types */

import { compareAsc, format } from "date-fns";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Food = ({ food, is3Coloum }) => {
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
    notes,
  } = food || {};
  return (
    <div
      className={`border hover:scale-105 dark:bg-green-950 transition-all duration-500 border-green-800 bg-green-200 p-4 rounded flex flex-col justify-between`}
    >
      <div>
        <img
          referrerPolicy="no-referrer"
          src={image}
          className={`w-full h-[300px] shadow-lg object-cover rounded-md ${is3Coloum ? 'lg:h-[300px]' : 'lg:h-[200px]'}`}
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

      <div
        data-aos="fade-right"
        className="flex items-center border border-green-800 p-3 rounded-lg gap-2 mt-4 relative"
      >
        <div>
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={donatorPhoto}
            referrerPolicy="no-referrer"
            alt={`${donatorName}'s name photo`}
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{donatorName}</h3>
          <p className="text-sm font-light">{donatorEmail}</p>
        </div>

        <p className="absolute right-4 bottom-full translate-y-1/2 dark:bg-green-950 bg-green-200 px-3 font-semibold">
          Donor
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p
            className={`${
              status === "Available"
                ? "bg-blue-200 text-blue-900"
                : "text-red-900 bg-red-200"
            } w-fit px-4 py-1 rounded-sm`}
          >
            {status}
          </p>
        </div>
        <div>
          <p
            className={`${
              compareAsc(new Date(), new Date(expiredDate)) === -1
                ? "text-blue-800"
                : "text-red-600"
            } flex items-center gap-1 font-semibold text-blue-800`}
          >
            <span>
              <CiCalendarDate size={24} />
            </span>{" "}
            {format(new Date(expiredDate || new Date()), "PP")}
          </p>
        </div>
      </div>
        <div className="mt-2">
          <p className="text-nowrap text-ellipsis overflow-hidden">{notes}</p>
        </div>

      <div data-aos="fade-up" className="mt-4">
        <Link
          to={`/food/${_id}`}
          className="btn w-full bg-green-600 text-white rounded hover:bg-green-700"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Food;