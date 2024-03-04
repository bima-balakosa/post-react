import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout, reset } from "../features/authSlice";
import { getMe } from "../features/authSlice";
import Dropdown from 'react-bootstrap/Dropdown';
<link rel="stylesheet" href="index.css" />


const Navbar = () => {
  const dispatch = useDispatch(); // dipakai untuk menggunakan Dispatch
  const navigate = useNavigate(); // dipakai untuk menggunakan navigasi
  const { user } = useSelector((state) => state.auth); // dipakai untuk menggunakan Selector, untuk memilih fungsi yang digunakan dala file ./features/authSlide.js


  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);


  console.log("user:", user);
  // MEMBUAT FUNGSI LOGOUT
  //1 Lihat variabel logout di nomor 2
  // - masukan fungsi:
  // - dispatch(Logout());
  // - dispatch(reset());
  // - navigate("/login");

  const logout = () => {
    //2. masukan semua fungsi diatas kedalam variabel logout ini
    dispatch(Logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item"></NavLink>

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">

                < img className="thumbnail rounded profile" src={`http://localhost:5000/public/images/${user && user.user_profile}`} alt="" srcset="" />

              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" className="text-capitalize">{user && user.user_name} </Dropdown.Item>
                <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
