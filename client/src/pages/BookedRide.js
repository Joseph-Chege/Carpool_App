import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUser, faClock } from "@fortawesome/free-solid-svg-icons";

function BookedRide({ booked_ride, onRemoveRide }) {
  // Destructure the booked_ride object
  const {
    pickup_location,
    dropoff_location,
    pickup_time,
    estimated_cost,
    driver,
    vehicle // Assuming vehicle object is part of booked_ride
  } = booked_ride;
  console.log("Booked ride:", booked_ride);
  return (
    <div className="p-4 border-b border-gray-200 mt-4 max-w-2xl mx-auto bg-white shadow-lg rounded-lg items-end">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Display vehicle image */}
        <img
          className="w-full h-40 md:w-60 md:h-80 rounded-lg object-cover border-4 border-gray-500"
          src={vehicle?.image}  // Access vehicle's image here
          alt={vehicle?.make}   // Alt text based on vehicle make
        />
        <div className="flex-1 text-sm md:text-base">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 truncate mb-2">
            Ride Details
          </h2>
          
          {/* Ride Info */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLocationDot} size="sm" />
            <span className="text-gray-600 font-semibold">Pickup Location:</span>
            <p className="text-gray-600">{pickup_location}</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FontAwesomeIcon icon={faLocationDot} size="sm" />
            <span className="text-gray-600 font-semibold">Dropoff Location:</span>
            <p className="text-gray-600">{dropoff_location}</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FontAwesomeIcon icon={faClock} size="sm" />
            <span className="text-gray-600 font-semibold">Pickup Time:</span>
            <p className="text-gray-600">{pickup_time}</p>
          </div>
          <div className="mt-2">
            <span className="text-gray-600 font-semibold">Estimated Cost: </span>
            <p className="text-gray-600">${estimated_cost}</p>
          </div>

          {/* Driver Info */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
            Driver Details
          </h3>
          <div className="flex items-center space-x-2 mt-2">
            <FontAwesomeIcon icon={faUser} size="sm" />
            <span className="text-gray-600 font-semibold">Name:</span>
            <p className="text-gray-600">{driver?.name}</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FontAwesomeIcon icon={faUser} size="sm" />
            <span className="text-gray-600 font-semibold">Phone Number:</span>
            <p className="text-gray-600">{driver?.phone_number}</p>
          </div>

          {/* Vehicle Info */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
            Vehicle Details
          </h3>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-gray-600 font-semibold">Make:</span>
            <p className="text-gray-600">{vehicle?.make}</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-gray-600 font-semibold">Color:</span>
            <p className="text-gray-600">{vehicle?.color}</p>
          </div>

          {/* Cancel Ride Button */}
          <div className="flex flex-col mt-4 space-x-4">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              onClick={() => onRemoveRide(booked_ride)}  // Handle ride removal
            >
              Cancel Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookedRide;
