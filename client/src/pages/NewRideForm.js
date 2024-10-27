import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewRideForm({ user }) {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [distance, setDistance] = useState("");
  const [estimatedCost, setEstimatedCost] = useState("");
  const [rideType, setRideType] = useState("regular");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Ensure all fields are filled out
    if (!pickupLocation || !dropoffLocation || !pickupTime || !dropoffTime || !distance || !estimatedCost) {
      setError("All fields must be filled out");
      return;
    }

    fetch("/rides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pickup_location: pickupLocation,
        dropoff_location: dropoffLocation,
        pickup_time: new Date(pickupTime),
        dropoff_time: new Date(dropoffTime),
        distance: parseFloat(distance),
        estimated_cost: parseInt(estimatedCost),
        ride_type: rideType,
        driver_id: user.id, 
      }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((ride) => {
            alert("Ride created successfully!");
            navigate("/driverdashboard"); // Navigate to driver dashboard
            setError("");
          });
        } else {
          response.json().then((errorData) => {
            setError("Error in creating ride");
          });
        }
      })
      .catch(() => {
        setError("An error occurred. Please try again.");
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pt-20 sm:px-8 lg:px-16 dark:bg-gray-800">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm lg:max-w-md dark:bg-gray-700">
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 dark:text-white">
            Create New Ride
          </h1>

          <div className="text-lg sm:text-xl font-semibold text-center text-gray-700 mb-6 dark:text-white">
            Please enter the ride details
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="mb-4">
            <label htmlFor="pickupLocation" className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Pickup Location
            </label>
            <input
              type="text"
              id="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dropoffLocation" className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Dropoff Location
            </label>
            <input
              type="text"
              id="dropoffLocation"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pickupTime" className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Pickup Time
            </label>
            <input
              type="datetime-local"
              id="pickupTime"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dropoffTime" className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Dropoff Time
            </label>
            <input
              type="datetime-local"
              id="dropoffTime"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="distance" className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Distance (km)
            </label>
            <input
              type="number"
              id="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="estimatedCost" className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Estimated Cost (in USD)
            </label>
            <input
              type="number"
              id="estimatedCost"
              value={estimatedCost}
              onChange={(e) => setEstimatedCost(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rideType" className="block text-gray-700 font-semibold mb-2 dark:text-white">
              Ride Type
            </label>
            <select
              id="rideType"
              value={rideType}
              onChange={(e) => setRideType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-600 dark:text-white"
            >
              <option value="regular">Regular</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm">
            Create Ride
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewRideForm;
