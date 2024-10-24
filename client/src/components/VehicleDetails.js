import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function StarRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center space-x-1">
      {stars.map((star) => (
        <span key={star} className="text-yellow-500 text-2xl">
          <FontAwesomeIcon icon={star <= rating ? fasStar : farStar} />
        </span>
      ))}
    </div>
  );
}

function VehicleDetails({ onAddToBookedRides }) {
  const [vehicle, setVehicle] = useState(null);
  const [showDriverDetails, setShowDriverDetails] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [pendingRides, setPendingRides] = useState([]);
  const { id } = useParams();

  // Fetch vehicle data
  useEffect(() => {
    fetch(`/vehicles/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((vehicleData) => {
          setVehicle(vehicleData);

          // Fetch driver reviews and pending rides if the vehicle has a driver
          if (vehicleData.user && vehicleData.user.is_driver) {
            fetch(`/rides/${vehicleData.user.id}/reviews`).then((res) => {
              if (res.ok) {
                res.json().then((reviewData) => setReviews(reviewData));
              }
            });

            fetch(
              `/rides?driver_id=${vehicleData.user.id}&ride_status=pending`
            ).then((res) => {
              if (res.ok) {
                res.json().then((rideData) => setPendingRides(rideData));
              }
            });
          }
        });
      }
    });
  }, [id]);

  const toggleDriverDetails = () => {
    setShowDriverDetails((prev) => !prev);
  };

  const toggleReviews = () => {
    setShowReviews((prev) => !prev);
  };

  const handleBookRide = (ride) => {
    // Call the callback to add this ride to the booked rides
    onAddToBookedRides(ride);
    // console.log(ride);
  };

  if (!vehicle) {
    return <div>Loading vehicle details...</div>;
  }

  return (
    <div className="h-auto pt-10 pb-20">
      <div className="flex flex-col max-w-4xl rounded-lg shadow-lg bg-white mx-auto border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 mt-20 dark:bg-gray-700">
      <div className="mt-10">
        <h2 className="font-bold text-4xl mb-4 dark:text-white">
          {vehicle.make} {vehicle.model}
        </h2>
        <div className="flex justify-center mb-4 md:mb-0">
          <img
            src={vehicle.image}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-80 h-80 object-cover rounded-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center pl-8">
          <p className="text-lg mb-2 dark:text-white">
            <strong>Color:</strong> {vehicle.color}
          </p>
          <p className="text-lg mb-2 dark:text-white">
            <strong>Plate Number:</strong> {vehicle.plate_number}
          </p>
          <p className="text-lg mb-2 dark:text-white">
            <strong>Seating Capacity:</strong> {vehicle.seating_capacity} seats
          </p>

          <button
            onClick={toggleDriverDetails}
            className="w-1/2 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm mt-4"
          >
            {showDriverDetails ? "Hide Driver Details" : "Show Driver Details"}
          </button>

          {showDriverDetails && vehicle.user && (
            <div className="mt-4 rounded w-full">
              <h3 className="font-bold text-2xl underline mb-2 dark:text-white">
                Driver Details:
              </h3>
              <p className="text-lg mb-2 dark:text-white">
                <strong>Name:</strong> {vehicle.user.username}
              </p>
              <p className="text-lg mb-2 dark:text-white">
                <strong>Email:</strong> {vehicle.user.email}
              </p>
              <p className="text-lg mb-2 dark:text-white">
                <strong>Phone Number:</strong> {vehicle.user.phone_number}
              </p>

              <button
                onClick={toggleReviews}
                className="w-1/2 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm mt-4"
              >
                {showReviews ? "Hide Reviews" : "Show Reviews"}
              </button>

              {showReviews && reviews.length > 0 && (
                <div className="mt-4 mb-5 p-4 border border-gray-300 bg-gray-100 rounded shadow-lg">
                  <h4 className="font-bold text-xl">Reviews:</h4>
                  {reviews.map((review) => (
                    <div key={review.id} className="mt-2">
                      <div>
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        {review.user.username}
                      </div>
                      <strong>Rating:</strong>
                      <StarRating rating={review.rating} />
                      <strong>Comment:</strong> {review.comment}
                    </div>
                  ))}
                </div>
              )}

              {pendingRides.length > 0 && (
                <div className="mt-4 p-4 border border-gray-300 bg-gray-100 rounded shadow-lg">
                  <h4 className="font-bold text-xl">Pending Rides:</h4>
                  {pendingRides.map((ride) => (
                    <div key={ride.id} className="mt-2">
                      <p>
                        <strong>Pickup Location:</strong> {ride.pickup_location}
                      </p>
                      <p>
                        <strong>Dropoff Location:</strong>{" "}
                        {ride.dropoff_location}
                      </p>
                      <p>
                        <strong>Estimated Cost:</strong> ${ride.estimated_cost}
                      </p>
                      <Link to="/rides/your-rides">
                        <button
                          className="w-1/4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm mt-4"
                          onClick={() => handleBookRide(ride)}
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default VehicleDetails;
