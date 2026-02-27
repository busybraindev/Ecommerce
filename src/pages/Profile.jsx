import React, { useContext } from "react";
import { Ac } from "../contents/Index";

const Profile = () => {
  const { us, handleLogout } = useContext(Ac);
  return (
    <div>
      <h3>{us.displayName}</h3>
      <p>{us.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
