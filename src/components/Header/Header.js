import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <div className="hamburger__logo">
          <i className="fa-solid fa-bars"></i>
          <a href="#!">
            <img
              className="poco__logo"
              src="https://demo.pocotheme.com/1/image/catalog/maza/svg/logo2.svg"
              alt="Poco"
            />
          </a>
        </div>
        <form>
          <div className="dropdown header__dropdown__menu">
            <button
              className="btn  category"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p>
               All Categories
              </p>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#!">
                  Desktops
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Laptops & Notebooks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Components
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Tablets
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Software
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Phones & PDAs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Cameras
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  MP3 Players
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-fill ">
            <input
              className="search__input"
              type="text"
              name="search"
              data-autocomplete_route="extension/maza/product/product/autocomplete"
              placeholder="Search Products"
              aria-label="Search Products"
              autocomplete="off"
            ></input>
          </div>
          <div className="search__icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>

        <div className="compare__wishlist">
          <div>
            <a href="#!">
              <i className="fa-solid fa-scale-balanced"></i> Compare
            </a>
          </div>

          <div>
            <a href="#!">
              <i className="fa-regular fa-heart"></i> WishList
            </a>
          </div>
        </div>

        <div className="bag">
          <i className="bi bi-handbag bag__shopping"></i>
          <div className="price__text">
            <div>
              <span className="item">0 item(s) - </span>
              <span className="price">$0.00</span>
            </div>
            <p style={{margin:"0"}}>Shopping Cart</p>
          </div>
        </div>

        <div class="up__icon">
    <a href="#start"><i class="fa-solid fa-angle-up"></i></a>
  </div>
      </header>
    </div>
  );
}

export default Header;
