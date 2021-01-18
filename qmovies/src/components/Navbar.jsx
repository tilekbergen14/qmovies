import React, {useCallback, useContext} from "react";
import { Link } from "react-router-dom";
import {MovieContext} from "../MovieContext"

export default function Navbar() {
  const {user} = useContext(MovieContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top w-100">
      <div className="container">
        <div className="navbar-brand">
          <Link className="link" to="/">qMovies</Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active nav-link">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="nav-item nav-link">
              <Link className="link" to="/login">Movies</Link>
            </li>
            <li className="nav-item nav-link">
              <Link className="link" to="/login">{user ? "Logout" : "Login"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
