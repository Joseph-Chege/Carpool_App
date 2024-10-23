import React from "react";
import UserProfile from "../components/UserProfile"; // Import the component

function ProfilePage({ user }) {
  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <UserProfile userId={user.id} /> {/* Dynamically pass the userId */}
    </div>
  );
}

export default ProfilePage;
