import React from "react";
import { Link } from "react-router-dom";
import BookedRide from "./BookedRide";
import PriceCounter from "../components/PriceCounter";

function YourBookedRides({ booked }) {
  return (
    <div className="min-h-screen bg-gray-100 mt-16 dark:bg-gray-800">
      {booked.length === 0 ? (
        <Link to="/userdashboard">
          <div className="flex items-center justify-center min-h-screen p-8 sm:p-16 md:p-60">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 text-center border-t-4 border-gray-500 w-full max-w-sm sm:max-w-md md:max-w-lg dark:bg-gray-700">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 dark:text-white">
                Your booked rides will appear here
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white">
                Start planning your next trip!
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="p-4 sm:p-6 md:p-8 mt-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold mb-2 text-center">
            Your Booked Vehicles
          </h1>
          <div className="mb-2">
            <PriceCounter booked={booked} />
          </div>
          <div className="bg-gray-300 p-4 sm:p-6 md:p-8 rounded-lg">
            <ul className="flex flex-wrap justify-center gap-4">
              {booked.map((vehicle) => (
                <BookedRide
                  key={vehicle.id}
                  booked_vehicle={vehicle}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default YourBookedRides;
