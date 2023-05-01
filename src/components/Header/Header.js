import React from "react";
import "./Header.css";
import CartShow from "../CartShow/CartShow";
import { useState } from "react";
import TopCategoriesMenu from "../TopCategoriesMenu/TopCategoriesMenu";

function Header(props) {
  const {setScroll} = props;
  const [showCartShop, setShowCartShop] = useState(false);
  const [categoriesMenuShow, setCategoriesMenu] = useState(false);

  setScroll(!showCartShop);

  return (
    <div>
      {
        showCartShop && <CartShow setShowCartShop={setShowCartShop} />
      }

      {
        categoriesMenuShow && <TopCategoriesMenu setCategoriesMenu={setCategoriesMenu} />
      }

      <header>
        <div className="hamburger__logo"  >
          <i className="fa-solid fa-bars" onClick={() => setCategoriesMenu(!categoriesMenuShow)}></i>
          <a href="/">
            <img
              className="poco__logo"
              src="https://demo.pocotheme.com/1/image/catalog/maza/svg/logo2.svg"
              alt="Poco"
            />
          </a>
        </div>
        <form>
          <div className="header__input">
            <div className="dropdown header__dropdown__menu">
              <button
                className="btn category"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <p className="header__dropdown__menu">
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
            <div className="flex-fill">
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

        <div className="bag" onClick={() => setShowCartShop(!showCartShop)}>
          <i className="bi bi-handbag bag__shopping"></i>
          <div className="price__text">
            <div>
              <span className="item">0 item(s) - </span>
              <span className="price">$0.00</span>
            </div>
            <p style={{ margin: "0" }}>Shopping Cart</p>
          </div>
        </div>

        <div class="up__icon" onClick={() => window.scrollTo(0, 0)}>
          <a href="#start"><i  class="fa-solid fa-angle-up"></i></a>
        </div>
      </header>
    </div>
  );
}

export default Header;
