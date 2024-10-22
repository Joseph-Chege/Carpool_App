// import React from "react";
// import { Link } from "react-router-dom";

// function HomePageNotLoggedIn() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-custom-image-0 bg-cover bg-center dark:bg-grey-800">
//       <div className="bg-white bg-opacity-75 p-8 sm:p-10 rounded-lg shadow-lg text-center max-w-md sm:max-w-lg md:max-w-lg">
//         <h1 className="text-xl sm:text-2xl font-bold text-black mb-4">
//           Welcome to RidePool!
//         </h1>
//         <p className="text-black mb-6 text-sm sm:text-base">
//           Please log in or sign up to book a ride now.
//         </p>
//         <Link to="/signup">
//           <button
//             type="signup"
//             className="w-full sm:w-40 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
//           >
//             Get Started
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default HomePageNotLoggedIn;
import React from "react";
import { Link } from "react-router-dom";

function HomePageNotLoggedIn() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-custom-image-0 bg-cover bg-center dark:bg-gray-800 py-10">
      {/* Main Welcome Section */}
      <div className="bg-white bg-opacity-90 p-8 sm:p-12 rounded-xl shadow-lg text-center max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Welcome to RidePool!
        </h1>
        <p className="text-gray-700 mb-6 text-base sm:text-lg">
          We connect drivers and passengers for affordable, safe rides. Whether
          you're offering or looking for a ride, RidePool is the way to go.{" "}
          <span className="italic text-blue-600">
            "Shika ride bila stress!"
          </span>
        </p>
        <Link to="/signup">
          <button
            type="button"
            className="w-full sm:w-48 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-opacity-80 p-6 sm:p-10 rounded-lg shadow-lg text-center max-w-4xl mx-auto bg-gray-100 mt-16">
        {/* Feature 1 */}
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Affordable Rides
          </h3>
          <p className="text-gray-600">
            Share rides with others heading your way and save on travel costs.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Easy to Use
          </h3>
          <p className="text-gray-600">
            Our platform is simple and quick, making booking or offering rides
            effortless.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Safe and Secure
          </h3>
          <p className="text-gray-600">
            Verified drivers and passengers ensure a secure and comfortable
            journey.
          </p>
        </div>
      </div>

      {/* Inline CSS for animations
      <style jsx>{`
        .moving-car {
          width: 120px;
          animation: moveCar 7s linear infinite;
        }

        @keyframes moveCar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style> */}
    </div>
  );
}

export default HomePageNotLoggedIn;
