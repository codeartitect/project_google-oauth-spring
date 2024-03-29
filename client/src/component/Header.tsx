import React from "react";
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../context/AuthContext";

export const Header: React.FC = () => {
  const auth = useAuthContext();

  const handleLogout = () => {
    auth.logout();
  }

  return (
    <>
      <div className={"w-full"}>
        {auth.accessToken ?
          <>
            <NavLink to={"/"} className={"btn"} onClick={handleLogout}>Logout</NavLink>
            <NavLink to={"/profile"} className={"btn"}>Profile</NavLink>
          </>
          :
          <>
            <NavLink to={"/login"} className={"btn"}>Login</NavLink>
            <NavLink to={"/signup"} className={"btn"}>Signup</NavLink>
          </>
        }
      </div>
    </>
  );
};