import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light bg-dark py-2 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          
          <img src="./assets/clogo.png" className="d-block logo" alt="banner 1" />

        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  align-items-center" id="navbarTogglerDemo01">
          <div className="navbar-nav align-items-center justify-content-between">
            <div className="d-flex  ">
          
            </div>
           
            <div className="nav-link buttons justify-content-end">
              <NavLink to="/login" className="btn login-btn">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn  ms-2 register">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
             
            </div> 
          </div>
        </div>
      </div>
    </nav>
  );
}
