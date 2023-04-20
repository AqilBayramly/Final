import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div style={{backgroundColor:"rgb(255, 182, 16)"}}>
      <div className="yellow__line">
        <div className="dropdown ">
          <a
            className="btn btn-secondary dropdown-toggle btn__shop__category"
            href="#!"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shop By Category
            <i className="fa-solid fa-circle-chevron-down"></i>
          </a>
          <ul className="dropdown-menu dropdown__category">
            <li>
              <a className="dropdown-item" href="#!">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Something else here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Something else here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Something else here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Something else here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Something else here
              </a>
            </li>
          </ul>
        </div>

        <div className="nav">
          <a href="#!">Home</a>
          <a href="#!">Special</a>
          <a href="#!">Blog</a>
          <a href="#!">About Us</a>
          <a href="#!">

          <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle add__ons" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  AddOns
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#!">Modules</a></li>
    <li><a class="dropdown-item" href="#!">Designs</a></li>
    <li><a class="dropdown-item" href="#!">Widgets</a></li>
  </ul>
</div>
          </a>
          <a href="#!">Contact Us</a>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
