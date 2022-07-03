import React from "react";
import Navbar from "../components/global/Navbar";
import Profile from "../components/UserProfile/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserProfile() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Profile />
    </div>
  );
}

export default UserProfile;
