import { useEffect, useState } from "react";
import api from "../api";
import Profile from "../components/Profile";
import "../styles/Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    // fetch all users from the backend
    api
      .get("/users/")
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="users-container">
      <h1>Quote Machine</h1>
      <h2>User Profiles</h2>
      {users.map((user) => (
        <Profile
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default Users;
