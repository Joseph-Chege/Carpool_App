// import React from 'react'

// function Rides() {
//   return (
//     <div>
//         <h1>Rides</h1>

//         <p>Here you can see all the rides that have been requested by the users.</p>
//         <p>Here you can see all the rides that have been requested by the users.</p>

//         <p>Here you can see all the rides that have been requested by the users.</p>
//         <p>Here you can see all the rides that have been requested by the users.</p>
//         <p>Here you can see all the rides that have been requested by the users.</p>
//         <p>Here you can see all the rides that have been requested by the users.</p>

//         <p>Here you can see all the rides that have been requested by the users.</p>
//         <p>Here you can see all the rides that have been requested by the users.</p>
//         <p>Here you can see all the rides that have been requested by the users.</p>

//         <p>Here you can see all the rides that have been requested by the users.</p>
//         <p>Here you can see all the rides that have been requested by the users.</p>
//         <p>Here you can see all the rides that have been requested by the users.</p>

//         <p>Here you can see all the rides that have been requested by the users.</p>

//         <p>Here you can see all the rides that have been requested by the users.</p>
//         {/* Add your rides here */}

//     </div>
//   )
// }

// export default Rides
import React, { useEffect, useState } from "react";

function Rides({ driverId }) {
  const [rides, setRides] = useState([]); // State to hold rides
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    if (driverId) {
      console.log(`Fetching rides for driver ID: ${driverId}`);

      // Fetch rides for the current driver
      fetch(`/rides?driver_id=${driverId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch rides");
          }
        })
        .then((data) => {
          console.log("Fetched rides data:", data);
          setRides(data); // Update the rides state
        })
        .catch((error) => {
          setError(error.message); // Handle errors appropriately
        });
    }
  }, [driverId]);

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {" "}
      {/* Adjust layout */}
      <h1 className="text-2xl font-bold mb-4">My Rides</h1>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Display error message */}
      {rides.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rides.map((ride) => (
            <div key={ride.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="font-bold text-lg">
                Ride from {ride.pickup_location} to {ride.dropoff_location}
              </h2>
              <p>
                <strong>Pickup Time:</strong>{" "}
                {new Date(ride.pickup_time).toLocaleString()}
              </p>
              <p>
                <strong>Dropoff Time:</strong>{" "}
                {new Date(ride.dropoff_time).toLocaleString()}
              </p>
              <p>
                <strong>Distance:</strong> {ride.distance} km
              </p>
              <p>
                <strong>Estimated Cost:</strong> {ride.estimated_cost} KES
              </p>
              <p>
                <strong>Status:</strong> {ride.ride_status}
              </p>
            </div>
          ))}
        </div>
      ) : (
        !error && (
          <p className="text-lg text-gray-700 mt-8">No rides assigned yet.</p> // Adjust this message styling
        )
      )}
    </div>
  );
}

export default Rides;
