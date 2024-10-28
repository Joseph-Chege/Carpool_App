import React, { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  // Fetch user data when the component mounts
  useEffect(() => {
    fetch(`/users/${userId}`) // Fetch user by ID based on the API route
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  // Handle loading state
  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <div className="w-full sm:w-1/3 pr-4">
          {/* Display profile picture or default avatar */}
          {user.image ? (
            <img
              className="rounded-full mx-auto"
              src={user.image}
              alt="Profile"
              style={{ width: "150px", height: "150px" }}
            />
          ) : (
            <img
              className="rounded-full mx-auto"
              src="/default-avatar.png"
              alt="Default Profile"
              style={{ width: "150px", height: "150px" }}
            />
          )}
        </div>
        <div className="w-full sm:w-2/3 text-center sm:text-left mt-4 sm:mt-0">
          <h1 className="text-xl font-bold text-gray-900">{user.username}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">
            Phone: {user.phone_number || "Not provided"}
          </p>
          <p className="text-gray-600">
            Driver: {user.is_driver ? "Yes" : "No"}
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Joined on {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
