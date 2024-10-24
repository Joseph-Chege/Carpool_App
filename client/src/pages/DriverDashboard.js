// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function DriverDashboard({ user }) {
//   const [vehicles, setVehicles] = useState([]); // State to hold vehicles
//   const [error, setError] = useState(""); // State for error messages

//   // Check if user is defined and has an ID
//   const userId = user ? user.id : null;

//   useEffect(() => {
//     if (userId) {
//       // Fetch vehicles registered to the current user
//       fetch(`/vehicles?user_id=${userId}`)
//         // Assume backend API accepts query parameters for filtering
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             throw new Error("Failed to fetch vehicles");
//           }
//         })
//         .then((data) => {
//           setVehicles(data);
//         })
//         .catch((error) => {
//           setError(error.message); // Handle errors appropriately
//         });
//     }
//   }, [userId]);

//   return (
//     <div className="flex mt-20 h-screen">
//       <aside className="w-64 bg-gray-800 text-white p-4">
//         <h2 className="text-xl font-bold">Driver Dashboard</h2>
//         <ul className="mt-4">
//           <li>
//             <Link to="/Profile" className="block py-2 hover:bg-gray-700">
//               Profile
//             </Link>
//           </li>
//           <li>
//             <Link to="/rides" className="block py-2 hover:bg-gray-700">
//               My Bookings
//             </Link>
//           </li>
//           <li>
//             <Link to="/reviews" className="block py-2 hover:bg-gray-700">
//               Reviews
//             </Link>
//           </li>
//         </ul>
//       </aside>
//       <main className="flex-1 p-4 bg-gray-100">
//         <h1 className="text-2xl font-bold mb-4">Registered Vehicles</h1>
//         {error && <p className="text-red-500">{error}</p>}{" "}
//         {/* Display error message */}
//         {vehicles.length === 0 && !error} {/* Loading state */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {vehicles.length > 0
//             ? vehicles.map((vehicle) => (
//                 <div
//                   key={vehicle.id}
//                   className="bg-white p-4 rounded-lg shadow-md"
//                 >
//                   <h2 className="font-bold text-lg">
//                     {vehicle.make} {vehicle.model}
//                   </h2>
//                   <p>
//                     <strong>Year:</strong> {vehicle.year}
//                   </p>
//                   <p>
//                     <strong>Color:</strong> {vehicle.color}
//                   </p>
//                   <p>
//                     <strong>Plate Number:</strong> {vehicle.plate_number}
//                   </p>
//                   <p>
//                     <strong>Seating Capacity:</strong>{" "}
//                     {vehicle.seating_capacity}
//                   </p>
//                   <p>
//                     <strong>Sacco:</strong> {vehicle.sacco}
//                   </p>
//                 </div>
//               ))
//             : !error && <p>No vehicles registered yet.</p>}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default DriverDashboard;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DriverDashboard({ user }) {
  const [vehicles, setVehicles] = useState([]); // State to hold vehicles
  const [error, setError] = useState(""); // State for error messages

  // Check if user is defined and has an ID
  const userId = user ? user.id : null;

  useEffect(() => {
    console.log("User ID:", userId); // Log the userId to check if it's properly passed

    if (userId) {
      console.log(`Fetching vehicles for user ID: ${userId}`);

      // Fetch vehicles registered to the current user
      fetch(`/vehicles?user_id=${userId}`)
        .then((response) => {
          console.log("Fetch response status:", response.status); // Log the response status

          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch vehicles");
          }
        })
        .then((data) => {
          console.log("Fetched vehicles data:", data); // Log the fetched vehicles data
          setVehicles(data); // Update the vehicles state
        })
        .catch((error) => {
          console.error("Error fetching vehicles:", error.message); // Log any fetch errors
          setError(error.message); // Set the error message
        });
    }
  }, [userId]);

  useEffect(() => {
    console.log("Updated vehicles state:", vehicles); // Log whenever the vehicles state is updated
  }, [vehicles]);

  return (
    <div className="flex-col dark:bg-gray-900 min-h-screen">
      <div className='flex flex-1 h-screen'>
        <aside className="w-64 bg-gray-800 text-white p-4 pt-20">
          <h2 className="text-xl font-bold">Driver Dashboard</h2>
          <ul className="mt-4">
            <li>
              <Link to="/Profile" className="block py-2 hover:bg-gray-700">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/rides" className="block py-2 hover:bg-gray-700">
                My Bookings
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="block py-2 hover:bg-gray-700">
                Reviews
              </Link>
            </li>
          </ul>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 h-auto pt-20">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Registered Vehicles</h1>

          {/* Display error message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Display registered vehicles or message */}
          {vehicles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white p-4 rounded-lg shadow-md w-2/3"
                >
                  <img src={vehicle.image} />
                  <h2 className="font-bold text-lg">
                    {vehicle.make} {vehicle.model}
                  </h2>
                  <p>
                    <strong>Year:</strong> {vehicle.year}
                  </p>
                  <p>
                    <strong>Color:</strong> {vehicle.color}
                  </p>
                  <p>
                    <strong>Plate Number:</strong> {vehicle.plate_number}
                  </p>
                  <p>
                    <strong>Seating Capacity:</strong>{" "}
                    {vehicle.seating_capacity}
                  </p>
                  <p>
                    <strong>Sacco:</strong> {vehicle.sacco}
                  </p>
                  <Link to="/create-ride">
                        <button
                          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm mt-4"
                          // onClick={() => handleBookRide(ride)}
                        >
                          Create ride for vehicle
                        </button>
                      </Link>
                </div>
              ))}
            </div>
          ) : (
            !error && <p>No vehicles registered yet.</p> // Display message if no vehicles are found
          )}
        </main>
      </div>
    </div>
  );
}

export default DriverDashboard;
