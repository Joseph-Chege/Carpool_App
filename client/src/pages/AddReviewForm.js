import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AddReviewForm({ user, onNewReview }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(3); // Default rating to a valid number
  const { id } = useParams(); // Get the 'id' from the URL parameters
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [ride, setRide] = useState({});
  const [booking, setBooking] = useState(null);

  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the ride details by ride ID
    fetch(`/rides/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data);
          setRide(data);
          // Fetch the first booking if available
          if (data.bookings && data.bookings.length > 0) {
            fetch(`/bookings/${data.bookings[0].id}`).then((res) => {
              if (res.ok) {
                res.json().then((bookingData) => setBooking(bookingData));
              }
            });
          }
        });
      }
    });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!comment) {
      setError("Comment is required!");
      return;
    }

    if (!booking) {
      setError("No valid booking found!");
      return;
    }

    try {
      const response = await fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          user_id: user.id, // Use the user id passed in props
          ride_id: ride.id,
          booking_id: booking.id, // Booking is validated now
          rating,
        }),
      });

      if (response.ok) {
        const newReview = await response.json(); // Assume the server returns the new review
        setSuccessMessage("Review submitted successfully!");
        setComment("");
        setRating(''); // Reset rating to a default value
        onNewReview(newReview); // Call the callback to update reviews in VehicleDetails
        alert("Review submitted successfully!"); // Show success message in the browser's alert box
        navigate(`/userdashboard/vehicles/${ride.id}`); // Redirect to the vehicle details page
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError("An error occurred while submitting your review.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 text-center border-t-4 border-green-500 w-full max-w-md sm:max-w-lg"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Leave a Review
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}

        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Your Review:
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write your review here"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Your Rating:
          </label>
          <input
            id="rating"
            name="rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            min="1"
            max="5"
            placeholder="Enter a rating (1-5)"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default AddReviewForm;
