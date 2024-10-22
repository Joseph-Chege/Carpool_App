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
// import React from "react";
// import { Link } from "react-router-dom";

// function HomePageNotLoggedIn() {
//   return (
//     <div className="flex flex-col justify-between min-h-screen bg-custom-image-0 bg-cover bg-center dark:bg-gray-800 py-10">
//       {/* Main Welcome Section */}
//       <div className="bg-white bg-opacity-90 p-8 sm:p-12 rounded-xl shadow-lg text-center max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-16">
//         <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//           Welcome to RidePool!
//         </h1>
//         <p className="text-gray-700 mb-6 text-base sm:text-lg">
//           We connect drivers and passengers for affordable, safe rides. Whether
//           you're offering or looking for a ride, RidePool is the way to go.{" "}
//           <span className="italic text-blue-600">
//             "Shika ride bila stress!"
//           </span>
//         </p>
//         <Link to="/signup">
//           <button
//             type="button"
//             className="w-full sm:w-48 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
//           >
//             Get Started
//           </button>
//         </Link>
//       </div>

//       {/* Features Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-opacity-80 p-6 sm:p-10 rounded-lg shadow-lg text-center max-w-4xl mx-auto bg-gray-100 mt-16">
//         {/* Feature 1 */}
//         <div className="p-4 bg-blue-100 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">
//             Affordable Rides
//           </h3>
//           <p className="text-gray-600">
//             Share rides with others heading your way and save on travel costs.
//           </p>
//         </div>
//         {/* Feature 2 */}
//         <div className="p-4 bg-blue-100 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">
//             Easy to Use
//           </h3>
//           <p className="text-gray-600">
//             Our platform is simple and quick, making booking or offering rides
//             effortless.
//           </p>
//         </div>
//         {/* Feature 3 */}
//         <div className="p-4 bg-blue-100 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">
//             Safe and Secure
//           </h3>
//           <p className="text-gray-600">
//             Verified drivers and passengers ensure a secure and comfortable
//             journey.
//           </p>
//         </div>
//       </div>

//       {/* Inline CSS for animations */}
//       <style jsx>{`
//         .moving-car {
//           width: 120px;
//           animation: moveCar 7s linear infinite;
//         }

//         @keyframes moveCar {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default HomePageNotLoggedIn;
import React from "react";
import { Link } from "react-router-dom";

function HomePageNotLoggedIn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 py-10 overflow-hidden relative">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/1226652636/photo/night-police-car-lights-in-city-close-up-with-selective-focus-and-bokeh.jpg?s=612x612&w=0&k=20&c=wQHZxZ6s-FuDx8byqb29BrN50CGUMOhUa8sxBt2u1S8=")',
        }}
      ></div>

      {/* Moving background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-element bg-gray-600 w-48 h-48 rounded-full opacity-70 animate-moveDiagonal"></div>
        <div className="bg-element bg-gray-500 w-32 h-32 rounded-full opacity-50 animate-floatDiagonal"></div>
        <div className="bg-element bg-gray-700 w-64 h-64 rounded-full opacity-80 animate-bounceLarge"></div>
      </div>

      {/* Main Welcome Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-gray-800 bg-opacity-80 p-8 sm:p-12 rounded-xl shadow-lg text-center max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 animate-fadeIn">
          Welcome to RidePool!
        </h1>
        <p className="text-gray-300 mb-8 text-lg sm:text-xl animate-fadeIn delay-2">
          Connect with drivers and passengers for affordable, safe rides.
          Whether you're offering or looking for a ride, RidePool is your
          perfect choice!{" "}
          <span className="italic text-gray-400">
            "Shika ride bila stress!"
          </span>
        </p>
        <Link to="/signup">
          <button
            type="button"
            className="w-full sm:w-48 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg animate-bounceButton"
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Feature Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-800 bg-opacity-80 p-6 sm:p-10 rounded-lg shadow-lg text-center max-w-6xl mx-auto bg-gray-900 mt-20 animate-slideUp">
        <div className="p-6 bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Affordable Rides
          </h3>
          <p className="text-gray-300">
            Share rides and save money by joining passengers heading your way.
          </p>
        </div>
        <div className="p-6 bg-gray-600 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Simple to Use
          </h3>
          <p className="text-gray-300">
            Quickly find or offer rides through our easy-to-navigate platform.
          </p>
        </div>
        <div className="p-6 bg-gray-500 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Safe Journeys
          </h3>
          <p className="text-gray-300">
            All our drivers and passengers are verified to ensure your safety.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 bg-gray-800 py-12 mt-24">
        <div className="max-w-6xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-200 mb-8">
            What Our Riders Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-600 rounded-lg shadow-md">
              <p className="italic text-gray-300">
                "RidePool makes my commute so easy! I save money and it's super
                convenient."
              </p>
              <h4 className="text-lg font-semibold text-gray-100 mt-4">
                - John Doe
              </h4>
            </div>
            <div className="p-6 bg-gray-500 rounded-lg shadow-md">
              <p className="italic text-gray-300">
                "I love how safe it feels. The drivers are always verified, and
                the rides are great!"
              </p>
              <h4 className="text-lg font-semibold text-gray-100 mt-4">
                - Sarah Jones
              </h4>
            </div>
            <div className="p-6 bg-gray-400 rounded-lg shadow-md">
              <p className="italic text-gray-300">
                "No more stress about transport costs. I ride smart with
                RidePool!"
              </p>
              <h4 className="text-lg font-semibold text-gray-100 mt-4">
                - Jane Smith
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 bg-gray-700 py-12 mt-24 text-center animate-slideUpSlow">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
          Ready to Start?
        </h2>
        <p className="text-gray-200 text-lg mb-8">
          Sign up today and get moving with affordable, safe rides!
        </p>
        <Link to="/signup">
          <button
            type="button"
            className="w-full sm:w-48 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Join Now
          </button>
        </Link>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .bg-element {
          position: absolute;
          animation-duration: 12s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes moveDiagonal {
          0% {
            transform: translate(-100%, -100%);
          }
          100% {
            transform: translate(150%, 150%);
          }
        }

        @keyframes floatDiagonal {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes bounceLarge {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-moveDiagonal {
          animation: moveDiagonal 15s linear infinite;
        }

        .animate-floatDiagonal {
          animation: floatDiagonal 8s ease-in-out infinite;
        }

        .animate-bounceLarge {
          animation: bounceLarge 5s ease-in-out infinite;
        }

        .animate-slideUp {
          animation: slideUp 2s ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 3s ease-in;
        }

        .animate-bounceButton {
          animation: bounceLarge 2s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: slideUp 3s ease-in-out;
        }

        .animate-slideUpSlow {
          animation: slideUp 4s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default HomePageNotLoggedIn;
