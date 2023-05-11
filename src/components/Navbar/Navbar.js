import React from "react";
import "./Navbar.css";

function Navbar() {

  return (
    <div>
    <div style={{backgroundColor:"rgb(255, 182, 16)"}}>
      <div className="yellow__line__content">
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

        <nav>
        <div className="nav__text">
          <a href="/">Home</a>
          <a href="/special">Special</a>
          <a href="/blog">Blog</a>
          <a href="/about">About Us</a>
          <a className="addons__nav__text" href="#!">AddOns <i class="fa-solid fa-caret-down"></i>
  <ul className="dropdown-menu dropdown__show">
    <li><a className="dropdown-item" href="#!">Modules</a></li>
    <li><a className="dropdown-item" href="#!">Designs</a></li>
    <li><a className="dropdown-item" href="#!">Widgets</a></li>
  </ul>
          </a>


          <a href="/contact">Contact Us</a>
        </div>
        </nav>
      </div>

    </div>



    </div>
  );
}

export default Navbar;
