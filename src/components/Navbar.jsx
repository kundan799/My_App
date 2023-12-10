import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div classNameName="container-fluid d-flex border border-danger">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
            <li class="nav-item">
                <Link to="/create" class="nav-link">
                  Create Post
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  All Post 
                </Link>
              </li>
            </ul>
          </div>
          <input
            className="form-control w-50 "
            type="search"
            placeholder="Search"
          ></input>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
