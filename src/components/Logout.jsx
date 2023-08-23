import React from "react";
import "./Logout.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {

const user = useSelector(selectUser);
const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(logout())
}

  return (
    <div className="logout">
      <h1>
        Welcome{" "}
        <span>
          <em>{user.name}</em>
        </span>
      </h1>{" "}
      <button className="logout__button" onClick={handleSubmit}>Logout</button>
    </div>
  );
};

export default Logout;
