import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <Outlet />
      <h1>About Us</h1>
      <button onClick={clickHandler}>go home</button>
      <ul>
        <li>
          <Link to="programmer">Programmer</Link>
        </li>
        <li>
          <Link to="drivers">drivers</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
