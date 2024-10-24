import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import DriverDashboard from "../pages/DriverDashboard";
import Rides from "./Rides";
import SignupUserForm from "../pages/SignupUserForm";
import Login from "../pages/Login";
import HomePageNotLoggedIn from "../pages/HomePageNotLoggedIn";
import ProfilePage from "../pages/ProfilePage";
import Footer from "./Footer";
import VehicleRegistrationForm from "../pages/VehicleRegistrationForm";
import UserDashboard from "../pages/UserDashboard";
import VehicleDetails from "./VehicleDetails";
import AdminDashboard from "../pages/AdminDashboard";
import YourBookedRides from "../pages/YourBookedRides";
import AddReviewForm from "../pages/AddReviewForm";
import NewRideForm from "../pages/NewRideForm";

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [vehicle, setVehicles] = useState([]);
  const [bookedRides, setBookedRides] = useState([]);
  const [bookedVehicles, setBookedVehicles] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Function to toggle dark mode and save the state to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save the mode to localStorage
      console.log(newMode);
      return newMode;
    });
  };

  // Use useEffect to load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode); // Set dark mode based on saved preference
    }
    
    // Check session for user login status
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const addBookedRide = (ride) => {
    setBookedRides((prevRides) => [...prevRides, ride]);
    console.log(bookedRides);
  };

  const handleRemoveRide = (ride) => {
    setBookedRides(bookedRides.filter((r) => r.id !== ride.id));
  };

  const handleNewReview = (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  return (
    <div className={darkMode ? "dark" : "flex-col"}>
      <NavBar
        user={user}
        setUser={setUser}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <main className="dark:bg-gray-900 flex-grow-1">
        <Routes>
          {user ? (
            <>
              {user.username === "admin" && (
                <Route
                  path="/admindashboard"
                  element={<AdminDashboard user={user} />}
                />
              )}
              {user.is_driver && (
                <>
                  <Route
                    exact
                    path="/driverdashboard"
                    element={<DriverDashboard user={user} />}
                  />
                  <Route
                    path="/vehicle-registration"
                    element={<VehicleRegistrationForm />}
                  />
                  <Route path="/rides" element={<Rides />} />
                  <Route path="/create-ride" element={<NewRideForm user={user}/>} />
                </>
              )}
              <Route
                path="/userdashboard"
                element={<UserDashboard user={user} onAddToBookedRides={addBookedRide} />}
              />
              <Route
                path="/userdashboard/vehicles/:id"
                element={
                  <VehicleDetails
                    user={user}
                    onAddToBookedRides={addBookedRide}
                  />
                }
              />
              <Route
                path="/rides/your-rides"
                element={
                  <YourBookedRides
                    booked={bookedRides}
                    onRemoveRide={handleRemoveRide}
                  />
                }
              />
              <Route
                path="/rides/:id/reviews"
                element={
                  <AddReviewForm
                    user={user}
                    reviews={reviews}
                    onNewReview={handleNewReview}
                  />
                }
              />
              {/* Profile Page Route - Display user profile */}
              <Route path="/profile" element={<ProfilePage user={user} />} />
            </>
          ) : (
            <>
              <Route
                path="/signup"
                element={<SignupUserForm setUser={setUser} />}
              />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route
                path="*"
                element={
                  <HomePageNotLoggedIn
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                  />
                }
              />
            </>
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
