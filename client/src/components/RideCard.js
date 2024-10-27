import React from "react";
import { Link } from "react-router-dom";

function RideCard({ ride, onAddToBookedRides }) {
  const handleBookRide = (ride) => {
    // Call the callback to add this ride to the booked rides
    onAddToBookedRides(ride);
    // console.log(ride);
  };
  if (!ride) {
    return <div>Loading ride details...</div>;
  }

  return (
    <div>
      <div key={ride.id} className="p-4 bg-white shadow rounded-lg dark:text-black">
        <p>
          <strong>Pickup Time:</strong>{" "}
          {new Date(ride.pickup_time).toLocaleString()}
        </p>
        <p>
          <strong>Dropoff Location:</strong> {ride.dropoff_location}
        </p>
        <p>
          <strong>Estimated Cost:</strong> {ride.estimated_cost} KES
        </p>
        <p>
          <strong>Status:</strong> {ride.ride_status}
        </p>
        <Link to="/rides/your-rides">
        <button
          type="button"
          className="w-full sm:w-32 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm mt-3"
          onClick={() => handleBookRide(ride)}
        >
          Book Now
        </button>
        </Link>
        
      </div>
    </div>
  );
}

export default RideCard;
