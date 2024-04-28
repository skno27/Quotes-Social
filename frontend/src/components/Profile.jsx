import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user }) {
  console.log(user);
  const { id, username, quotes } = user;
  const navigate = useNavigate;

  const handleClick = () => {
    // navigate to user profile page
    navigate(`/users/${id}`);
  };

  return (
    <div
      className="user-info-container"
      onClick={handleClick}>
      <h2 className="profile-username">Username: {username}</h2>
      {quotes ? <p>{quotes.length} Quotes</p> : <p>0 Quotes</p>}
    </div>
  );
}

export default Profile;
