import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import DriverDashboard from "../pages/DriverDashboard";
import Rides from "./Rides";
import SignupUserForm from "../pages/SignupUserForm";
import Login from "../pages/Login";
import HomePageNotLoggedIn from "../pages/HomePageNotLoggedIn";
import Footer from "./Footer";
import VehicleRegistrationForm from "../pages/VehicleRegistrationForm";
import UserDashboard from "../pages/UserDashboard";
import VehicleDetails from "./VehicleDetails";
import AdminDashboard from "../pages/admindashboard";

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [vehicle, setVehicles] = useState([]);
 

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Simply toggle the dark mode state
  };

  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar
        user={user}
        setUser={setUser}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <main className="dark:bg-gray-900">
        <Routes>
          {user ? (
            <>
              {user.is_driver && (
                <>
                  <Route
                    exact
                    path="/driverdashboard"
                    element={<DriverDashboard />}
                  />
                  <Route
                    path="/vehicle-registration"
                    element={<VehicleRegistrationForm />}
                  />
                  <Route path="/rides" element={<Rides />} />
                </>
              )}
              <Route path="/userdashboard" element={<UserDashboard user={user} />} />
              <Route path="/userdashboard/vehicles/:id" element={<VehicleDetails vehicle={vehicle} />} />
              <Route path="admindashboard" element={<AdminDashboard user={user} /> } />

            </>
          ) : (
            <>
              <Route
                path="/signup"
                element={<SignupUserForm setUser={setUser} />}
              />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route
                path="/"
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
