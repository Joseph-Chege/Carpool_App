import React from "react";
import { Link } from "react-router-dom";
import { FaDollarSign, FaUserFriends, FaShieldAlt } from "react-icons/fa";

function HomePageNotLoggedIn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 py-10 overflow-hidden relative text-white">
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
      <div className="relative z-10 flex flex-col items-center justify-center text-center mx-auto mt-16">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-white mb-6 animate-fadeIn">
          Welcome to RidePool!
        </h1>
        <p className="text-gray-300 mb-8 text-lg sm:text-2xl animate-fadeIn delay-2 max-w-2xl">
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
            className="w-full sm:w-48 bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg animate-bounceButton"
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Benefits Section with Icons */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10 text-center max-w-6xl mx-auto bg-gray-900 mt-20 animate-slideUp">
        <div className="p-6 bg-gray-700 rounded-lg shadow-md">
          <FaDollarSign className="text-4xl mb-4 text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Affordable Rides
          </h3>
          <p className="text-gray-300">
            Share rides and save money by joining passengers heading your way.
          </p>
        </div>
        <div className="p-6 bg-gray-600 rounded-lg shadow-md">
          <FaUserFriends className="text-4xl mb-4 text-blue-400 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Community Driven
          </h3>
          <p className="text-gray-300">
            Meet and connect with others in your community, making your rides
            safer and more enjoyable.
          </p>
        </div>
        <div className="p-6 bg-gray-500 rounded-lg shadow-md">
          <FaShieldAlt className="text-4xl mb-4 text-red-400 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Safe Journeys
          </h3>
          <p className="text-gray-300">
            All our drivers and passengers are verified to ensure your safety.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 bg-gray-800 py-12 mt-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-200 mb-8 text-center">
          What Our Riders Say
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-700 rounded-lg shadow-md text-center">
            <p className="italic text-gray-300">
              "RidePool makes my commute so easy! I save money and it's super
              convenient."
            </p>
            <h4 className="text-lg font-semibold text-gray-100 mt-4">
              - Kamau Njoroge
            </h4>
          </div>
          <div className="p-6 bg-gray-600 rounded-lg shadow-md text-center">
            <p className="italic text-gray-300">
              "I love how safe it feels. The drivers are always verified, and
              the rides are great!"
            </p>
            <h4 className="text-lg font-semibold text-gray-100 mt-4">
              - Otieno Omondi
            </h4>
          </div>
          <div className="p-6 bg-gray-500 rounded-lg shadow-md text-center">
            <p className="italic text-gray-300">
              "No more stress about transport costs. I ride smart with
              RidePool!"
            </p>
            <h4 className="text-lg font-semibold text-gray-100 mt-4">
              - Samuel Kiprotich
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageNotLoggedIn;
